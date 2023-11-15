"use client"
import React, { useState, useEffect, } from 'react'
import { useParams } from 'next/navigation'
import RoomCard from '@/components/RoomCard'
import Image from 'next/image'
import Link from 'next/link'
import format from 'date-fns/format'
import {useForm, useController} from "react-hook-form"
import Select from 'react-select'

export type dbReservation = {
  id: string,
  user: string,
  room: String,
  checkin: Date,
  checkout: Date
}

export type dbRooms = {
  id: String,
  name: String,
  slot: number
  price: number
}

type option = {
  value: string | number,
  label: string
}

function searchPage() {

  const [avaible, setAvaible] = useState<dbRooms[]>([])

  const roomsOptions : option[] = []
  avaible.map(x => {
    roomsOptions.push({
      value: x.id as string,
      label: x.name as string
    })})

  const QuadOptions : option[] = [
      {value:1, label:"1"},
      {value:2, label:"2"},
      {value:3, label:"3"},
      {value:4, label:"4"}
  ]
  
  const DoubleOptions :option[] = [
    {value:1, label:"1"},
    {value:2, label:"2"},
  ]

  const {register, control, handleSubmit} = useForm()

  const { field } = useController({name : 'room', control })


  const [selected, setSelected] = useState<string>()
  const [count, setCount] = useState([])

  const pathname = useParams()

  const checkInReq = pathname.date[0].slice(0,10) as String
  const checkOutReq = pathname.date[0].slice(11) as String
  const adult = pathname.date[1]
  const child = pathname.date[2]

  const arrival = format(new Date(+checkInReq.slice(0,4), (+checkInReq.slice(5,7)-1) ,+checkInReq.slice(8,10) ), "d MMMM yyyy")
  const departure = format(new Date(+checkOutReq.slice(0,4), (+checkOutReq.slice(5,7)-1) ,+checkOutReq.slice(8,10) ), "d MMMM yyyy")

    console.log(checkInReq.slice(0,4),  " ",checkInReq.slice(5,7) , " ",checkInReq.slice(8,11))
    console.log("check in:",checkInReq , "check out:",checkOutReq, "adult:", adult, "child:", child)

    useEffect(() =>{
      getData()
    }, [])
    
    async function getData() {
      const res = await fetch('http://localhost:3000/api/search',{
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              checkInReq, checkOutReq, name
          })
      })
      const data = await res.json()
      setAvaible(data.results);

      console.log('Post req :',data)
    }

    console.log("selected: ", selected)

    const handleRoomSelect = (option : any) => {
      setSelected(option.value);
      field.onChange(option.value)
    }

    const handleGuestSelect = (option : any) => {
      field.onChange(option.value)
    }

    const pippo = (formValues : any) =>{
      console.log(formValues)
    }
  return (
    <>
      <div className='flex gap-10 bg-vinaccio'>
        <Image src="/logo.jpg" className='ml-8' width={160} height={100} alt="logo"/>
      <div className='flex ml-8 justify-end items-center min-w-[75%]'>

          <nav className='flex gap-10 text-white text-xl'>
            <Link style={{color: 'white'}} href="../../../">Home</Link>
            <Link style={{color: 'white'}} href="../../../rooms">Rooms</Link>
            <Link style={{color: 'white'}} href="../../../gallery">Gallery</Link>
            <Link style={{color: 'white'}} href="../../../maps">Maps</Link>
            <Link style={{color: 'white'}} href="../../../contact">Contact</Link>
          </nav>
        </div>
      </div>

      <main className='main-background'>
        <h1 className="p-10 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Rooms aviable from {arrival} to {departure}</h1>
        {(avaible.length > 0 ? (
            <div className='flex gap-x-10 p-10 flex-wrap '>
                {avaible.map(room =>(
                  <RoomCard key={room.id as string} {...room} />
                ))}
            </div>
        ) :
            <div>No rooms Found</div>
        )}
          <div>
              <form onSubmit={handleSubmit(pippo)}className='max-w-[50%] bg-white shadow-md rounded-lg p-6'>
                <div className="grid gap-6 md:grid-cols-2 p-6">

                    <div>
                        <label htmlFor="first_name" className="label_form">First name</label>
                        <input type="text" {...register('first_name')} className="input_form" placeholder="John" required />
                    </div>

                    <div>
                        <label htmlFor="last_name" className="label_form">Last name</label>
                        <input type="text" {...register('last_name')} className="input_form" placeholder="Doe" required />
                    </div>

                    <div>
                        <label htmlFor="email" className="label_form">Email address</label>
                        <input type="email" {...register('email')} className="input_form" placeholder="john.doe@company.com" required />
                    </div>

                    <div>
                        <label htmlFor="phone" className="label_form">Phone number</label>
                        <input type="tel" {...register('phone')} className="input_form" placeholder="123-45-678" required />
                    </div>

                    <div>
                        <label htmlFor="room" className="label_form">Select Rooms</label>
                        <Select value={roomsOptions.find(({ value }) => value === field.value)} onChange={handleRoomSelect} options={roomsOptions} className="" />
                    </div>

                    <div>
                        <label htmlFor='guests' className='label_form'>Select Guests</label>
                        <Select value={(selected === "5" ? DoubleOptions.find(({value}) => value === field.value) : QuadOptions.find(({value}) => value === field.value) ) } onChange={handleGuestSelect} options={(selected == 5 ? DoubleOptions : QuadOptions)} />
                    </div>
                  </div> 
                  
                  <div className="flex items-start mb-6 p-6">
                    <div className="flex items-center h-5">
                      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                  </div>
                <button type="submit" className="text-white ml-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </form>
          </div>
      </main>
    </>
  )
    
}

export default searchPage