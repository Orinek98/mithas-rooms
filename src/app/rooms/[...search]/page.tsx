"use client"
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import useMultistepForm from '@/lib/useMultistepForm'
import AvaibleRooms from '@/components/search/AvaibleRooms'
import FormUser from '@/components/search/FormUser'
import RecapRooms from '@/components/search/RecapRooms'
import HeaderSearch from '@/components/search/HeaderSearch'
import { dbRooms, FormRoom } from '@/lib/rooms'
import { Progress } from 'flowbite-react'

let renderCount = 0

type FormData = {
  selectedRoom: FormRoom[],
  firstName: string,
  lastName: string,
  email: string,
  phone: string
  country: string
  roomValidate: boolean,
  formValidate: boolean
}

const INITIAL_DATA : FormData = {
  selectedRoom: [],
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  roomValidate: false,
  formValidate: false
}

function page() {
    
    const searchParams = useSearchParams()
    
    const checkInReq = searchParams.get('daterange_from') as string
    const checkOutReq = searchParams.get('daterange_to') as string

    const [data, setData] = useState(INITIAL_DATA)
    const [selected, setSelected] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    function updateFields(fields: Partial<FormData>){
        setData(prev => {
        return {...prev, ...fields}
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
      <AvaibleRooms {...data} updateFields={updateFields} checkIn={checkInReq} checkOut={checkOutReq} />,
      <FormUser {...data} updateFields={updateFields} />,
      <RecapRooms {...data} checkIn={checkInReq} checkOut={checkOutReq} />,
    ])

    async function sendData(){

        let fName = data.firstName
        let lName = data.lastName
        let email = data.email
        let phone = data.phone
        let country = data.country
        let items = ""
  
        const sendUser = await fetch('http://localhost:3000/api/users',{
            method: "PUT",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fName, lName, email, phone, country
            })
          })
          console.log("put user ok!", fName, lName, email)
  
        for(let i = 0; i < data.selectedRoom.length; i++){

          let roomId = data.selectedRoom[i].room.id
          let a = data.selectedRoom[i].adult
          let c = data.selectedRoom[i].child
  
          const sendReservation = await fetch('http://localhost:3000/api/search',{
            method: "PUT",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                roomId, a, c, email, checkInReq, checkOutReq,
            })
          })
          items = items + `${data.selectedRoom[i].room.name} ${a} ${c} `
          console.log("put ok!")
        }

        const sendEmail = await fetch('http://localhost:3000/api/send', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fName, lName, email, checkInReq, checkOutReq, items
        })
        })
        
        
      }

      const handleRoom = () => {
        if(data.roomValidate){
          next()
        }
      }

      const handleForm = () => {
        if(data.formValidate){
            next()
            updateFields({formValidate: false})
        }

      }

      let index = ((currentStepIndex+1)*(3.3333)*10)
      console.log("index =",index)
      renderCount++
      console.log('render:' , renderCount, "selectedRoom length: ",data.selectedRoom.length)

    

  return (
    <main className='main-background w-full h-full'>
        <HeaderSearch />

        <div className='mx-auto mt-8 max-w-[45%]'><Progress color='teal' progress={index} /></div>
        <div className='mt-16 mb-12'>{step}</div>
        

        <div className='flex justify-center align-middle w-full'>
        {errorMessage && <div className="ml-2 block text-red-500"> {errorMessage} </div>}
        {isFirstStep &&
          <button className={`multistep-button ${!data.roomValidate && "cursor-not-allowed"}`} onClick={handleRoom} type="button">
            Next
            <svg className="inline w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
          
        }
        {!isFirstStep && !isLastStep &&
          <>
            <button 
            className='multistep-button' 
            onClick={back} type="button">
              <svg className="inline w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
              </svg>
              Back
          </button>
          <button className={`multistep-button ${!data.formValidate && "cursor-not-allowed"}`} onClick={handleForm} type="button">
            Next
            <svg className="inline w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
          </> 
        }
        {isLastStep &&
           <>
           <button 
           className='multistep-button' 
           onClick={back} type="button">
             <svg className="inline w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
             </svg>
             Back
         </button>
         <button className='multistep-button' onClick={sendData} type="button">
           Finish
           <svg className="inline w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
           </svg>
         </button>
         </> 

        }
        </div>

      </main>
  )
}

export default page


{/* <div className='absolute start-[80%] top-2 select-none py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600'>
              {currentStepIndex + 1} / {steps.length}
            </div> */}















{/* <div className='relative'>
          <div>
            <div className='mx-auto mt-8 max-w-[45%]'><Progress progress={index} /></div>
            
            <div className='mt-16 mb-24'>{step}</div>
            <div className={`absolute ${isFirstStep ? 'start-[80%]' : 'start-[55.55%]'} -bottom-20`}>
              <div className='flex'>
              {!isFirstStep && 
                <button 
                  className='multistep-button' 
                  onClick={back} type="button">
                    <svg className="inline w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                    </svg>
                    Back
                </button>
              }
              {isLastStep ? 
                <button className='multistep-button' onClick={sendData} type="button">Finish</button>
                 : 
                 <button className='multistep-button' onClick={next} type="button">
                  Next
                  <svg className="inline w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                 </button>
              }

              </div>
            </div>
          </div>
        </div> */}