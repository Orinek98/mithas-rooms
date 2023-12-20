"use client"
import {useState, useEffect, useRef} from 'react'
import type { dbRooms, FormRoom } from '@/lib/rooms'
import { render } from 'react-dom'

type AvaibleData = {
    selectedRoom: FormRoom[],
    roomValidate: boolean
    room: dbRooms
}

type AvaibleFormProps = AvaibleData &{
    updateFields: (fields: Partial<AvaibleData>) => void
}

let renderCard = 0

export default function RoomCard({selectedRoom, roomValidate, updateFields, room} : AvaibleFormProps){
    const {id, name, slot, price, reservedSlot} = room


    const [selected, setSelected] = useState<boolean>(false)
    const [adult, setAdult] = useState<number>(1)
    const [child, setChild] = useState<number>(0)

    function restore(){
        const oldRom = selectedRoom.filter(x => x.room.id === id) 
        console.log(oldRom)
        if(oldRom.length > 0){
            setSelected(true)
            setAdult(oldRom[0]?.adult)
            setChild(oldRom[0]?.child)
        }
        return
    }

    useEffect(() =>{
        restore()
    },[])

    const tot =  ((adult + child < slot) ? 1 : 0 );


    const incrementAdult = () => {
      tot && !selected ? setAdult(adult+1) : null
    }
    const incrementChild = () => {
      tot && !selected ? setChild(child+1) : null
    }
    
    const decrementAdult = () => {
      adult !== 1 && !selected ? setAdult(adult-1) : null
    }
    const decrementChild = () => {
      child !== 0 && !selected ? setChild(child-1) : null
    }


    function addToOrder(room: dbRooms){
        if(selected) return
        const newRoom = selectedRoom
        newRoom.push({room: room, adult: adult, child: child})
        console.log("newRoom = ", newRoom)
        updateFields({
            selectedRoom: newRoom
        })
        updateFields({
            roomValidate: true
        })
    }
    
    function removeFromOrder(roomId: string){
        if(selectedRoom.length == 1 && selectedRoom[0].room.id == roomId)
        updateFields({
            roomValidate: false
        })
        const newRoom = selectedRoom.filter(room => room.room.id !== roomId)
        updateFields({
            selectedRoom: newRoom
        })
       

    }

    const numberSlots = (slot : number) =>{
        if(slot == 4){
            return (
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
                    </svg>
                </div>
            )
        }
        else {
            return (
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
                    </svg>
                </div>
            )
        }
    }
    renderCard++
    console.log("RENDER CARD: ",renderCard)

  return (
    
    <div className={`max-w-xs border ${selected ? 'bg-light-smeraldo/50' : 'bg-white'} border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
        <div>
            <img className="rounded-2xl p-3" src="http://localhost:3000/rooms/matrimoniale.jpg" alt="room_card_image" />
        </div>
        <div className="flex flex-col px-4 mt-2 mb-4">

            <div className='flex justify-between'>
                <h5 className="self-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <div className='self-center flex justify-start'>{numberSlots(slot)} ({slot})</div>
            </div>
        </div>

        <div className='flex justify-between px-6 mb-2'>
            
            <h1 className='text-md md:text-lg text-black'>Adults:</h1>

            <div className={`grid grid-cols-3 `}>
                <button type="button" className={`${selected ? 'cursor-not-allowed' : 'cursor-pointer'} room_card_button trasition ease-in duration-200`} onClick={decrementAdult}>-</button>
                <div className='place-self-center text-lg text-black'>{adult}</div>
                <button type="button" className={`${selected ? 'cursor-not-allowed' : 'cursor-pointer'} room_card_button trasition ease-in duration-200`} onClick={incrementAdult}>+</button>
            </div>
        </div>
          

        <div className='flex justify-between px-6 mb-3'>
            <h1 className='text-md md:text-lg text-black'>Children:</h1>

            <div className='grid grid-cols-3'>
                <button type="button" className={`${selected ? 'cursor-not-allowed' : 'cursor-pointer'} room_card_button trasition ease-in duration-200`} onClick={decrementChild}>-</button>
                <div className='place-self-center text-lg text-black'>{child}</div>
                <button type="button" className={`${selected ? 'cursor-not-allowed' : 'cursor-pointer'} room_card_button trasition ease-in duration-200`} onClick={incrementChild}>+</button>
            </div>
        </div>

        <div className='flex justify-between border-t-2 px-14 py-2'>
            <div>
                <button
                    onClick={() => {removeFromOrder(room.id), setSelected(false)}}
                    type="button" 
                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-2.5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 trasition ease-in duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                </button>
                <button
                     onClick={() => {addToOrder(room), setSelected(true)}}
                    type="button"
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-2.5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 trasition ease-in duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                </button>

            </div>

            <h5 className="self-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">€{price*adult}</h5>

        </div>
    </div>
      
      )
    }
    