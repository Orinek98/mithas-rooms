import { useContext } from 'react'
import { OrderContext } from './OrderContext'

type props = {
    adult: string,
    child: string,
    checkIn: string,
    checkOut: string,
}

function SearchRoomsRecap({adult, child, checkIn, checkOut} : props) {
    const {orderProducts} = useContext(OrderContext)
    console.log('aaa: ', adult , child)

    let totalCart = 0
    for (const productId of orderProducts){
        const price = orderProducts.find(p => p === productId)?.price || 0
        totalCart += price as number
    }

  return (
    <div className='w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Requested Rooms for {(+adult)+(+child)} guests</h5>
        </div>
        <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {orderProducts.map(prod =>(
            <li key={prod.id} className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="http://localhost:3000/rooms/singola.jpg" alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {prod.name} ({prod.slot})
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            from {checkIn} to {checkOut}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod.price}
                    </div>
                </div>
            </li>
        ))}
        </ul>
        <p className='text-xl font- bold text-right'>€{totalCart}</p>
        </div>
    </div>
  )
}

export default SearchRoomsRecap


