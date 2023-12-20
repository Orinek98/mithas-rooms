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

      <div className='w-[100%] md:w-[90%] relative mx-auto mb-28 md:mb-8 mt-8  lg:aspect-21/9 xs:aspect-square'>
        <NewImageSlider images={heroImage} />
        <div className='absolute z-10  max-w-[28rem] left-0 right-0 mx-auto md:bottom-2 opacity-80 hover:opacity-100 ease-linear duration-200'>
          <SearchRooms />
        </div>
      </div>
    

      <Info />

    <section className='p-2'>
      <h1 className='text-4xl font-bold px-16 pt-8'>The Rooms</h1>
      <Rooms />
    </section>

    <section>
      <h1>Contact</h1>
      <Contact />
    </section>


      <Footer />

    </main>
  )
}
