import {useState, useContext} from 'react'
import { dbRooms } from '@/app/search/[...date]/page'

export default function RoomCard({id, name, slot, price} : dbRooms){

    const numberSlots = (slot : number) =>{
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
        <a className="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="http://localhost:3000/1.jpg" alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <div className='flex'>
                        {numberSlots(slot)}
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{slot}</p>
                    </div>

                </div>
            </div>
        </a>
      
      )
    }
    