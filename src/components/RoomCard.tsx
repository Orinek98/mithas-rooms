import {useState, useContext} from 'react'
import { dbRooms } from '@/app/search/[...date]/page'
import { OrderContext} from "@/components/OrderContext"

export default function RoomCard({id, name, slot} : dbRooms){
    const {orderProducts, addProduct, removeProduct, clearOrder} = useContext(OrderContext)
    console.log(orderProducts)

    const numberSlots = (slot) =>{
        const list = []
        for(let i = 0; i < slot; i++){
            list.push(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          )
        }
        return list
    }



  return (
        <a href="#" className="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="http://localhost:3000/1.jpg" alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <div className='flex'>
                        {numberSlots(slot)}
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{slot}</p>
                    </div>

                </div>
            
                <div>

                    <button onClick={() => removeProduct(name)} type="button" className="text-white bg-vinaccio/75 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </button>

                    <button onClick={() => addProduct(name)} type="button" className="text-white bg-smeraldo/75 hover:bg-smeraldo focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>

                </div>
            
            </div>

            
        </a>
      
      )
    }
    