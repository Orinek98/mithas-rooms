import { dbRooms, FormRoom } from "@/lib/rooms"
import { useSearchParams } from 'next/navigation'
import format from "date-fns/format"
import FormWrapper from "../FormWrapper"
import { getDate, getMonth } from "date-fns"

type RecapRoom = FormData & {
    checkIn: string,
    checkOut: string,
  }
  
  type FormData = {
    selectedRoom: FormRoom[],
    firstName: string,
    lastName: string,
    email: string,
    phone: string
    country: string
  }

function RecapRooms({
    selectedRoom,
    firstName,
    lastName,
    email,
    phone,
    country,
    checkIn, 
    checkOut,
} : RecapRoom) {
    let totDay = (Math.abs(((((((new Date(checkIn)).getTime()) - ((new Date(checkOut)).getTime())) / 1000)/60)/60)/24)+1)


    let totalCart = 0
    let totAdult = 0
    let totChild = 0

    let arrival = format(new Date(checkIn), "dd MMMM yyy")
    let departure = format(new Date(checkOut), "dd MMMM yyy")
    

  return (
    <FormWrapper title="Reservation Recap">
        
        <div className="grid gap-x-12 grid-cols-1 md:grid-cols-2">

            <dl className="max-w-md p-8 rounded-md bg-white text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Name</dt>
                    <dd className="text-lg font-semibold">{firstName} {lastName}</dd>
                </div>
                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email address</dt>
                    <dd className="text-lg font-semibold">{email}</dd>
                </div>
                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone number</dt>
                    <dd className="text-lg font-semibold">{phone}</dd>
                </div>
                <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Country</dt>
                    <dd className="text-lg font-semibold">{country}</dd>
                </div>
            </dl>

            <div className="self-end">
            <h1 className="font-md mb-2">Room reserved from {arrival} to {departure}</h1>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Room name
                        </th>
                        <th scope="col" className="md:px-3 py-3">
                            Adult
                        </th>
                        <th scope="col" className="pr-3 py-3">
                            Child.
                        </th>
                        <th scope="col" className="px-3 py-3">
                            Days
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                {selectedRoom.map(r =>(
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img className="block md:inline w-8 h-8 mb-2 mr-4 rounded-full" src="http://localhost:3000/rooms/singola.jpg" alt="Neil image" />
                        {r.room.name}
                      </td>
                      <td className="px-0 md:px-6 py-4 text-center">
                      {r.adult}
                      </td>
                      <td className="pr-3 py-4 text-center">
                      {r.child}
                      </td>
                      <td className="px-3 py-4 text-center">
                        {totDay}
                      </td>
                      <td className="px-6 py-4 text-center">
                          €{r.room.price}
                      </td>
                      <div className="hidden">{totalCart += r.room.price*r.adult*totDay}{totAdult += r.adult}{totChild += r.child}</div>
                  </tr>
                ))}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4" />
                  <td className="px-6 py-4">
                    {totAdult}
                  </td>
                  <td className="px-6 py-4">
                    {totChild}
                  </td>
                  <td className="px-6 py-4" />
                  <td className="px-6 py-4 text-lg font-bold">
                    €{totalCart}
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
        </div>
    </FormWrapper>
  )
}

export default RecapRooms


{/* 
        // <div className='w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
        //     <div className="flex items-center justify-between mb-4">
        //         <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white"></h5>
        //     </div>
        //     <div className="flow-root">
        //         <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        //     {selectedRoom.map(r =>(
        //         <li key={r.room.id as string} className="py-3 sm:py-4">
        //             <div className="flex items-center">
        //                 <div className="flex-shrink-0">
        //                     <img className="w-8 h-8 rounded-full" src="http://localhost:3000/rooms/singola.jpg" alt="Neil image" />
        //                 </div>
        //                 <div className="flex-1 min-w-0 ms-4">
        //                     <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
        //                         {r.room.name} (A: {r.adult}) (C: {r.child})
        //                     </p>
        //                     <p className="text-sm text-gray-500 truncate dark:text-gray-400">
        //                         from {checkIn} to {checkOut} ({totDay} days)
        //                     </p>
        //                 </div>
        //                 <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        //                     ${(r.room.price*r.adult*totDay)}
        //                 </div>
        //             </div>
        //             <div className="hidden">{totalCart += r.room.price*r.adult*totDay}</div>
        //         </li>
        //     ))}
        //     </ul>
        //     <p className='text-xl text-black text-right'>€{totalCart}</p>
        //     </div>
        // </div> */}


{/* 
        // <div className="flex bg-white justify-center items-end">
        //         {selectedRoom.map(room =>(
        //                 <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        //                 <li className="pb-3 sm:pb-4">
        //                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
        //                       <div className="flex-shrink-0">
        //                          <img className="w-8 h-8 rounded-full" src="http://localhost:3000/rooms/singola.jpg" alt="Neil image" />
        //                       </div>
        //                       <div className="flex-1 min-w-0">
        //                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
        //                             {room.room.name}
        //                          </p>
        //                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
        //                          {room.adult}/{room.child} €{room.room.price}
        //                          </p>
        //                       </div>
        //                       <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        //                         €{room.room.price*totDay}
        //                       </div>
        //                    </div>
        //                 </li>
        //                 <div className="hidden">{totalCart += room.room.price*room.adult*totDay}</div>
        //                 </ul>
        //             ))}
        //                 <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        //                 €{totalCart}
        //               </div>

        //         </div> */}