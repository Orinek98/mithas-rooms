import React from 'react'
import {TbBrandBooking} from "react-icons/tb"
import {AiOutlineInstagram, AiOutlineMail} from "react-icons/ai"

function Footer() {
  return (
    <footer>
        <div className='flex flex-col items-center justify-center bg-smeraldo-base'>
            <div className='flex gap-4 mt-6'>
                <TbBrandBooking className="bg-smeraldo-10 rounded-2xl p-1 inline w-14 h-14" />
                <AiOutlineInstagram className="bg-smeraldo-10 rounded-2xl p-1 inline w-14 h-14"/>
                <AiOutlineMail className="bg-smeraldo-10 rounded-2xl p-1 inline w-14 h-14"/>
            </div>

            <div className='flex gap-4 mt-4 text-xl'>
                <a>Home</a>
                <a>Rooms</a>
                <a>Gallery</a>
                <a>Maps</a>
                <a>Contact</a>
            </div>

            <div className='mt-2'>
                <h2 className='inline'>Copyright ©2023, Developed by </h2>
                <h2 className='inline text-xl'>sasaDev</h2>
            </div>
        </div>
    </footer>
  )
}

export default Footer