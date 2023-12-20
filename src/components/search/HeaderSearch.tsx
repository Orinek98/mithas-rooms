"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Flowbite, CustomFlowbiteTheme, Navbar, } from 'flowbite-react';

const customNav: CustomFlowbiteTheme = {
  navbar:{
    root:{
      base: "bg-vinaccio px-16"
    },
    collapse:{
      list: "mt-4 flex flex-col items-center bg-vinaccio-200 md:bg-vinaccio rounded-md md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
    },
    link:{
      active: {
        on: "text-white text-xl hover:text-gray-200",
        off: "text-blue-200 text-xl hover:text-gray-200"
      }
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-vinaccio-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      icon: "h-6 w-6 shrink-0"
    }
  }
}

function Header() {

  return (
    <Flowbite theme={{ theme: customNav }}>
      <Navbar fluid>
      <Navbar.Brand as={Link} href="../.././">
      <Image src="/logo.jpg" className='ml-8' width={150} height={100} alt="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} active href="../.././">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} active href="../../rooms">
          Rooms
        </Navbar.Link>
        <Navbar.Link as={Link} active href="../../maps">
          Services
        </Navbar.Link>
        <Navbar.Link as={Link} active href="../../contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </Flowbite>
        
  )
}

export default Header



// <div className='flex gap-10 bg-vinaccio'>
    //     <Image src="/logo.jpg" className='ml-8' width={160} height={100} alt="logo"/>
    //   <div className='flex flex-wrap ml-8 justify-end items-center min-w-[75%]'>

    //       <nav className='flex gap-10 text-white text-xl'>
    //         <Link style={{color: 'white'}} href="./">Home</Link>
    //         <Link style={{color: 'white'}} href="./rooms">Rooms</Link>
    //         <Link style={{color: 'white'}} href="./maps">Maps</Link>
    //         <Link style={{color: 'white'}} href="./contact">Contact</Link>
    //       </nav>
    //   </div>
    // </div>


    // <nav className="bg-vinaccio">
    //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //       <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
    //       <Image src="/logo.jpg" className='ml-8' width={140} height={100} alt="logo"/>
    //       </a>
    //       <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
    //           <span className="sr-only">Open main menu</span>
    //           <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
    //           </svg>
    //       </button>
    //       <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    //         <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-vinaccio dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //           <li>
    //             <a href="./" className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
    //           </li>
    //           <li>
    //             <a href="./rooms" className="block py-2 px-3 text-gray-900 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
    //           </li>
    //           <li>
    //             <a href="./maps" className="block py-2 px-3 text-gray-900 md:text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
    //           </li>
    //           <li>
    //             <a href="./contact" className="block py-2 px-3 text-gray-900 md:text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    // </nav>    