"use client"
import {useState} from 'react'
import {format} from "date-fns"
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import { useRouter } from 'next/navigation';


let arrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>


type ValuePiece = Date | any

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function SearchRooms() {
    
  const [date, setDate] = useState<Value>([new Date(), new Date().getTime()+(86400000)])

    console.log(date)

  return (
    <form action={"/rooms/search"} method='GET' className='flex gap-x-0 md:gap-x-3 bg-white p-4 border border-smeraldo/25 rounded-lg justify-center items-center shadow-md xs:w-full'>

        <div>
          <div className='flex gap-x-14'>
            <h1 className='md:text-xl text-lg text-black select-none'>Check-in</h1>
  
            <h1 className='md:text-xl text-lg text-black select-none'>Check-out</h1>

          </div>
            <DateRangePicker onChange={setDate} value={date} minDate={new Date()}  format="dd MM y" rangeDivider={arrow} clearIcon={null} calendarIcon={null}/>
        </div>

          <button type='submit' className='bg-smeraldo/80 text-white text-lg md:text-xl rounded-2xl px-2 py-1 md:px-4 md:py-2 hover:bg-smeraldo trasition ease-in duration-200 z-10'>Check availability</button>
    </form>
  )
}
