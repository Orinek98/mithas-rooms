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
    
  const [date, setDate] = useState<Value>([new Date(), new Date()])
    
  const [adult, setAdult] = useState<number>(1)
  const [child, setChild] = useState<number>(0)

    const router = useRouter()

    function searchRooms(){
      let arrival = format(date[0], 'yyyy-MM-dd')
      let departure = format(date[1], 'yyyy-MM-dd')

      if(tot){
        let params = `/search/${arrival}_${departure}/${adult}/${child}`
        router.push(params)
      }
      else 
        return
    }

    const tot = ((adult + child < 9) ? 1 : 0 );


    const incrementAdult = () => {
      adult !== 9 ? setAdult(adult+1) : null
    }
    const incrementChild = () => {
      child !== 9 ? setChild(child+1) : null
    }
    
    const decrementAdult = () => {
      adult !== 1 ? setAdult(adult-1) : null
    }
    const decrementChild = () => {
      child !== 0 ? setChild(child-1) : null
    }

    console.log(date)

  return (
    <div className='grid auto-rows-min auto-cols-min gap-y-3 bg-white p-10 border border-smeraldo/25 rounded-lg shadow-md xs:w-full'>

        <div className='col-span-1 self-center border-b-smeraldo/25 border-b-2'>
            <h1 className='text-2xl text-black'>Check-in</h1>
        </div>
        <div className='col-span-1 self-center border-b-smeraldo/25 border-b-2'>
            <h1 className='text-2xl text-black'>Check-out</h1>
        </div>

        <div className='col-span-2 self-center'>
          <DateRangePicker onChange={setDate} value={date} format="dd-MM-y" rangeDivider={arrow} clearIcon={null} calendarIcon={null}/>
        </div>

        <div className='self-center'>
          <h1 className='lg:text-xl md:text-lg text-black'>Adults:</h1>
        </div>
          
        <div className='self-center flex gap-x-3 justify-end '>
            <button className='border bg-white rounded-2xl w-8 h-8 hover:bg-smeraldo/25 trasition ease-in duration-200' onClick={decrementAdult}>-</button>
            <div className='place-self-center text-lg text-black'>{adult}</div>
            <button className='border bg-white rounded-2xl w-8 h-8 hover:bg-smeraldo/25 trasition ease-in duration-200' onClick={incrementAdult}>+</button>
        </div>

        <div className='self-center'>
          <h1 className='lg:text-xl md:text-lg text-black'>Children:</h1>
        </div>
          
        <div className='self-center flex gap-x-3 justify-end'>
          <button className='border bg-white rounded-2xl w-8 h-8 hover:bg-smeraldo/25 trasition ease-in duration-200' onClick={decrementChild}>-</button>
          <div className='place-self-center text-lg text-black'>{child}</div>
          <button className='border bg-white rounded-2xl w-8 h-8 hover:bg-smeraldo/25 trasition ease-in duration-200' onClick={incrementChild}>+</button>
        </div>


        <div className='col-span-2 justify-self-center place-self-center	'>
          <button className='bg-smeraldo/80 text-white lg:text-xl md:text-lg rounded-2xl px-4 py-2 hover:bg-smeraldo trasition ease-in duration-200' onClick={searchRooms}>Check availability</button>
        </div>
    </div>
  )
}
