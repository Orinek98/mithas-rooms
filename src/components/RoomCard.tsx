"use client"
import {useState, useContext} from 'react'
import { OrderContext } from './OrderContext'
import type { dbRooms } from '@/lib/rooms'

export default function RoomCard(room : dbRooms){
    const {id, name, slot, price, reservedSlot} = room

    // const [guests, setGuests] = useState<number>(0)
    const {orderProducts, addProduct, removeProduct, clearOrder} = useContext(OrderContext)

    const numberSlots = (slot : number) =>{
        const list = []
        for(let i = 0; i < slot; i++){
            list.push(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>          
          )
        }
        return list
    }

    // const incrementGuests = () => {
    //     guests !== slot ? setGuests(guests+1) : null
    //   }
    // const decrementGuests = () => {
    //     guests !== 1 ? setGuests(guests-1) : null
    //   }

      console.log("orderProducts: ",orderProducts)
    //   console.log("orderProducts: ",orderGuests)


  return (
    
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src="http://localhost:3000/rooms/matrimoniale.jpg" alt="" />
        </a>
        <div className="grid grid-cols-2 gap-y-4 p-5">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <div className='self-center flex justify-end'>{numberSlots(slot)} ({slot})</div>

            {/* <p className="self-center text-lg font-normal text-gray-700 dark:text-gray-400">Select Guest:</p>
            <div className='self-center flex gap-x-3 justify-end '>
                <button className='border bg-white rounded-2xl w-8 h-8 hover:bg-smeraldo/25 trasition ease-in duration-200' onClick={decrementGuests}>-</button>
                <div className='place-self-center text-lg text-black'>{guests}</div>
                <button className='border bg-white rounded-2xl w-8 h-8 hover:bg-smeraldo/25 trasition ease-in duration-200' onClick={incrementGuests}>+</button>
            </div> */}

            <button
                onClick={() => {addProduct(room)}}
                className="inline-flex justify-between gap-x-1 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-4">
                    <p className='self-center'>Add</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>

            <button
                onClick={() => removeProduct(room)}
                className="inline-flex justify-between gap-x-1 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-4">
                    <p className='self-center'>Remove</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </button>
        </div>
    </div>
      
      )
    }
    