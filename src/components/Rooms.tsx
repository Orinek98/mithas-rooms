import React from 'react'
import Link from 'next/link'

export default function Rooms() {
  return (
    <>
        <h1 className='text-4xl px-10 my-10'>The Rooms</h1>

        <div className="mx-auto px-10">

        <div className='grid grid-cols-3 justify-center gap-10'>
            <Link href={"/"}>
            <div className=' max-w-[90%] shadow-lg p-3'>
                <img src="/rooms/doppia.jpg" />
                <h2 className='text-center'>tripla</h2>
                </div>
            </Link>
            <Link href={"/"}>
            <div className='rounded-md max-w-[90%] shadow-lg'>
                <img src="/rooms/singola.jpg" />
                <h2 className='text-xl'>Quadruplaa</h2>
                </div>
            </Link>
            <Link href={"/"}>
                <div className='border max-w-[90%] shadow-lg p-3'>
                <img src="/rooms/matrimoniale.jpg"/>
                <h2 className='text-center'>Matrimoniale</h2>
                </div>
            </Link>

        </div>

        </div>
    </>
  )
}
