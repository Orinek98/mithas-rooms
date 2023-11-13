import Footer from '@/components/Footer'
import SearchRooms from '@/components/SearchRooms'
import Rooms from '@/components/Rooms'
import Info from '@/components/Info'
import Contact from '@/components/Contact'
import {NewImageSlider} from "@/components/NewImageSlider"
import Header from '@/components/Header'

export default function Home() {
  const heroImage = [
    {url: 'http://localhost:3000/1.jpg', alt: 'Beo'},
    {url: 'http://localhost:3000/2.jpg', alt: 'Beo2'},
    {url: 'http://localhost:3000/3.jpg', alt: 'Beo3'},
    {url: 'http://localhost:3000/4.jpg', alt: 'Beo4'},
    {url: 'http://localhost:3000/pictures/michi.jpg', alt: 'Beo4'},
    {url: 'http://localhost:3000/pictures/guate1.jpg', alt: 'Beo4'},
    {url: 'http://localhost:3000/pictures/guate2.jpg', alt: 'Beo4'},
  ]

  return (
    <main className='main-background'>

      <Header />

      <div className='flex flex-wrap gap-y-6 gap-x-6 lg:gap-x-24 sm:flex-nowrap items-center justify-center pt-6 px-2'>
        <div className='max-w-[1000px] w-full md:aspect-3/2 xs:aspect-square xs:mr-0'>
          <NewImageSlider images={heroImage} />
        </div>
        <div className='xs:mr-0'>
          <SearchRooms />
        </div>
      </div>

      <Info />

      <Rooms />

      <Contact />

      <Footer />

    </main>
  )
}
