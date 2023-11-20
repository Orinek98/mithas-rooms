"use client"
import { useState, createContext, useEffect, Dispatch } from "react";
import type { SetStateAction } from "react";
import type { dbRooms } from "@/lib/rooms";


export type OrderContent = {
  orderProducts: dbRooms[];
  setOrderProducts: Dispatch<SetStateAction<dbRooms[]>>;
  addProduct: (product: dbRooms) => void;
  removeProduct: (product: dbRooms) => void;
  clearOrder: () => void;

} 


export const OrderContext = createContext<OrderContent>({} as OrderContent);

function OrderContextProvider({children} : {children: React.ReactNode}) {

  const ls =  typeof window !== "undefined" ? window.sessionStorage : null;
  
  const [orderProducts, setOrderProducts] =  useState<dbRooms[]>([]);
  
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

    
  function addProduct(product : dbRooms){
    if(orderProducts.find(p => p.id === product.id)) return;
    setOrderProducts(prev  =>[...prev, product])
    
  }

  function removeProduct(product : dbRooms){
    setOrderProducts(prev =>{
      const pos = prev.indexOf(product)

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