import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <div className='flex gap-10 bg-vinaccio'>
        <Image src="/logo.jpg" className='ml-8' width={160} height={100} alt="logo"/>
      <div className='flex ml-8 justify-end items-center min-w-[75%]'>

          <nav className='flex gap-10 text-white text-xl'>
            <Link style={{color: 'white'}} href="./">Home</Link>
            <Link style={{color: 'white'}} href="./rooms">Rooms</Link>
            <Link style={{color: 'white'}} href="./gallery">Gallery</Link>
            <Link style={{color: 'white'}} href="./maps">Maps</Link>
            <Link style={{color: 'white'}} href="./contact">Contact</Link>
          </nav>
      </div>
    </div>
  )
}

export default Header