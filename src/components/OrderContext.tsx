"use client"
import { useState, createContext, useEffect } from "react";


export const OrderContext = createContext({});

function OrderContextProvider({children} : {children: React.ReactNode}) {

  const ls =  typeof window !== "undefined" ? window.localStorage : null;
  
  const [orderProducts, setOrderProducts] =  useState<string[]>([]);
  
  useEffect(() =>{
      if(orderProducts?.length > 0){
        ls?.setItem('Order', JSON.stringify(orderProducts));
      }
  },[orderProducts])

  useEffect(() =>{
    if(ls && ls.getItem('Order')) {
      setOrderProducts(JSON.parse(ls.getItem('Order') as string))
    }
  },[])

    
  function addProduct(productId : string){
    setOrderProducts(prev  =>[...prev, productId])
  }

  function removeProduct(productId : string){
    setOrderProducts(prev =>{
      const pos = prev.indexOf(productId)

      if(pos !== -1){
         return prev.filter((value, index) => index !== pos)
      }

      return prev
    })
  }

  function clearOrder(){
    setOrderProducts([]);
  }

  return (
    <OrderContext.Provider value={{orderProducts, setOrderProducts, addProduct, removeProduct, clearOrder}}>
        {children}
    </OrderContext.Provider>
  )
}

export default OrderContextProvider