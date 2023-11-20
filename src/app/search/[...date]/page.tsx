"use client"
import React, { useState, useEffect, } from 'react'
import { useParams } from 'next/navigation'
import RoomCard from '@/components/RoomCard'
import Image from 'next/image'
import Link from 'next/link'
import format from 'date-fns/format'
import SearchRoomsForm from '@/components/SearchRoomsForm'
import SearchRoomsRecap from '@/components/SearchRoomsRecap'
import type { dbRooms } from '@/lib/rooms'

let renderCount = 0

function SearchPage() {

  const [avaible, setAvaible] = useState<dbRooms[]>([])
  
  const pathname = useParams()

  const checkInReq = pathname.date[0].slice(0,10) as String
  const checkOutReq = pathname.date[0].slice(11) as String

  const recapParams = {
    checkIn : pathname.date[0].slice(0,10) as string,
    checkOut : pathname.date[0].slice(11) as string,
    adult: pathname.date[1],
    child: pathname.date[2],
  }

  const arrival = format(new Date(+checkInReq.slice(0,4), (+checkInReq.slice(5,7)-1) ,+checkInReq.slice(8,10) ), "d MMMM yyyy")
  const departure = format(new Date(+checkOutReq.slice(0,4), (+checkOutReq.slice(5,7)-1) ,+checkOutReq.slice(8,10) ), "d MMMM yyyy")

    console.log(checkInReq.slice(0,4),  " ",checkInReq.slice(5,7) , " ",checkInReq.slice(8,11))
    console.log("check in:",checkInReq , "check out:",checkOutReq, "adult:", recapParams.adult, "child:", recapParams.child)

    async function getData() {
      const res = await fetch('http://localhost:3000/api/search',{
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              checkInReq, checkOutReq
          })
      })
      const data = await res.json()
      setAvaible(data.results);

      console.log('Post req :',data)
    }
    useEffect(() =>{
      getData()
    }, [])


    renderCount++
    console.log('render:' , renderCount)
  return (

      <main className='main-background'>
        <div className='flex gap-10 bg-vinaccio'>
          <Image src="/logo.jpg" className='ml-8' width={160} height={100} alt="logo"/>
          <div className='flex ml-8 justify-end items-center min-w-[75%]'>

            <nav className='flex gap-10 text-white text-xl'>
              <Link style={{color: 'white'}} href="../../../">Home</Link>
              <Link style={{color: 'white'}} href="../../../rooms">Rooms</Link>
              <Link style={{color: 'white'}} href="../../../gallery">Gallery</Link>
              <Link style={{color: 'white'}} href="../..../maps">Maps</Link>
              <Link style={{color: 'white'}} href="../../../contact">Contact</Link>
            </nav>
          </div>
        </div>

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

        <div className='flex gap-x-5 p-10'>
         <SearchRoomsForm />
         <SearchRoomsRecap {...recapParams} />
        </div>

      </main>
  )
    
}

export default SearchPage
