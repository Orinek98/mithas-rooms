import React from 'react'

function Info() {
  return (
        <div className='grid items-center gap-y-10 grid-rows-4 md:grid-rows-2 xs:grid-rows-3 grid-cols-1 lg:grid-cols-3 bg-light-smeraldo mt-10 py-16 px-8 rounded-lg max-w-[95%] mx-auto'>
          
            <div className='row-span-2 col-span-1 md:row-span-1 px-4 py-12 self-start'>
              <h1 className='text-4xl text-white mb-4'>Welcome to Mithas Rooms B&B</h1>
              <p className='text-xl text-white'>Whether you are looking for a B&B suitable for families, couples, solo travelers, explorers of the world or digital nomads, Mitha’s will make you feel at home, without letting you forget what it means to be away from home.You will love her spicy scents, painted roofs and the warm and colorful rooms. All that in the historic center of the vibrant Catania.</p>
            </div>

            <div className='row-span-1 md:row-span-2 col-span-2 justify-self-end px-0 md:px-4'>
              <img className='rounded-2xl' src="/grand-room.jpg" alt="grandroom" />
            </div>

            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.1748675292206!2d15.088118111578662!3d37.50379362760649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313e32e02e9fc81%3A0xe6adca235f9106da!2sVia%20Landolina%2C%2041%2C%2095131%20Catania%20CT!5e0!3m2!1sit!2sit!4v1700570574687!5m2!1sit!2sit" 
              width="100%" 
              height="100%" 
              className='py-7'
              loading="lazy" 
              ></iframe>


        </div>
  )
}

export default Info