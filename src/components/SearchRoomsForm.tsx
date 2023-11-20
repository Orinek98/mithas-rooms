import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

export default function SearchRoomsForm() {

    const {register, handleSubmit} = useForm()

  return (
    <form className='max-w-[50%] bg-white shadow-md rounded-lg p-6'>
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

        </div>
        <div className="p-6 flex items-start mb-6">
        <div className="flex items-center h-5">
          <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
        </div>
        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>

        </div>
        <button type="submit" className="ml-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
    </form>
  )
}








{/* <div>
                        <label htmlFor="room" className="label_form">Select Rooms</label>
                        <Select value={roomsOptions.find(({ value }) => value === field.value)} onChange={handleRoomSelect} options={roomsOptions} className="" />
                    </div>

                    <div>
                        <label htmlFor='guests' className='label_form'>Select Guests</label>
                        <Select value={(selected === "5" ? DoubleOptions.find(({value}) => value === field.value) : QuadOptions.find(({value}) => value === field.value) ) } onChange={handleGuestSelect} options={(selected == 5 ? DoubleOptions : QuadOptions)} />
                    </div> */}









                  
{/* <div className='col-span-2 '>
                    {fields.map((field, index) =>(
                      <div className='grid grid-cols-4 gap-x-3 mt-3' key={field.id}>
                        <div className='col-span-1'>
                          <label htmlFor="room" className="label_form">Select Rooms</label>
                          <Controller as={Select} {...register(`room${index}.name`)} onChange={handleRoomSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {avaible.map(x => (
                              <option value={x.id as string}>{x.name}</option>
                            ))}  
                          </select>
                        </div>
                        <div className='col-span-1'>
                          <label htmlFor='guests' className='label_form'>Select Guests</label>
                          <select {...register(`room${index}.slot`)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {(selected == '5' ? (
                              <>
                              <option>1</option>
                              <option>2</option>
                              </>
                            ) : (
                              <>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              </>
                            )) }
                          </select>
                        </div>
                        <div className='self-end justify-start'>
                          <button type="button" onClick={() => {remove(index)}} className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Remove Room</button>
                        </div>
                      </div>
                    ))}
                    </div> */}