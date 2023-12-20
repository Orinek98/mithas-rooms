import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

import FormWrapper from '../FormWrapper'
import { allCountry } from '@/lib/country'
import PhoneInput from 'react-phone-number-input'
import useMultistepForm from '@/lib/useMultistepForm'
import { useState } from 'react'

type UserData = {
  firstName: string
  lastName: string,
  email: string,
  phone: string
  country: string
  formValidate: boolean
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}  

export default function FormUser({firstName, lastName, email, phone, updateFields} : UserFormProps) {

  const [validEmail, setValidEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleEmail = (ev : any) => {
    setValidEmail(ev.target.value)
  }

  const checkData = (e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if(validEmail === email){
      updateFields({formValidate: true})
      setEmailError("")
      return
    }
    setEmailError("Check Email field")
    console.log('You clicked submit.')
  }

  return (
    <FormWrapper title="User Information">
      <h1 className="font-md mb-2 italic">Insert the data an then press the confirm button</h1>
      <form onSubmit={checkData} id="myForm" className=' bg-white shadow-md rounded-lg p-6'>
          <div className="grid gap-6 md:grid-cols-2 p-6">

              <div>
                  <label htmlFor="first_name" className="label_form">First name</label>
                  <input 
                    type="text"
                    value={firstName}
                    onChange={e => updateFields({firstName: e.target.value})}
                    className="input_form"
                    placeholder="John"
                    required />
              </div>

              <div>
                  <label htmlFor="last_name" className="label_form">Last name</label>
                  <input
                    type="text" 
                    value={lastName}
                    onChange={e => updateFields({lastName: e.target.value})} 
                    className="input_form" 
                    placeholder="Doe" 
                    required />
              </div>

              <div>
                  <label htmlFor="email" className="label_form">Email address</label>
                  <input 
                    type="email" 
                    name='email'
                    value={email}
                    onChange={e => updateFields({email: e.target.value})} 
                    className="input_form" 
                    placeholder="john.doe@company.com" 
                    required />
              </div>

              <div>
                  <label htmlFor="email" className="label_form">Confirm Email {emailError && <div className="ml-2 inline text-red-500"> {emailError} </div>}</label>
                  <input 
                    type="email"
                    name='email2' 
                    value={validEmail}
                    onChange={handleEmail} 
                    className="input_form" 
                    placeholder="john.doe@company.com" 
                    required />
              </div>

              <div>
                  <label htmlFor="phone" className="label_form">Phone number</label>
                  <PhoneInput
                    value={phone}
                    onChange={(num) => updateFields({phone: num})}  
                    placeholder="123-45-678" 
                    required />
              </div>

              <div>
                  <label htmlFor="country" className="label_form">Select your Country</label>
                  <select id="country" 
                    name="country" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={e =>updateFields({country: e.target.value})}
                  >
                    {allCountry}
                  </select>
              </div>
          </div>

          <div className="p-6 flex items-start mb-2">

            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>

            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
            </label>
            </div>

            <button type="submit" className="ml-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirm</button>
      </form>
    </FormWrapper>
  )
}