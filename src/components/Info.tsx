import React from 'react'

function Info() {
  return (
    <>
        <div className="mr-auto px-10">
        
        <div className='flex items-center bg-light-smeraldo mt-10 rounded-lg'>
          
          <div className='max-w-[40%] pl-6'>
            <h1 className='text-4xl text-white mb-4'>Welcome to Mithas Rooms B&B</h1>
            <p className='text-white max-w-[80%]'>Located in a historic building in the city center, our B&B provides a perfect base for immersing yourself in Catania&aposs unique culture and atmosphere. Our well-appointed rooms are designed with your comfort in mind, ensuring a pleasant stay. Each morning, savor a delicious Sicilian breakfast featuring fresh local specialties and aromatic coffee.</p>
          </div>

          <div>
            <img className='p-4 flex rounded-2xl' src="/grand-room.jpg" alt="grandroom" />
          </div>

        </div>
      </div>

      <div className="ml-auto px-10">
        
        <div className='flex items-center bg-light-smeraldo mt-4 gap-10 rounded-lg'>
          
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.1748675242975!2d15.088123476378797!3d37.50379362772261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313e32e02e9fc81%3A0xe6adca235f9106da!2sVia%20Landolina%2C%2041%2C%2095131%20Catania%20CT!5e0!3m2!1sit!2sit!4v1686136247206!5m2!1sit!2sit" className='w-96 h-96 p-4 rounded-xl'></iframe>
          </div>

          <div className='max-w-[40%]'>
            <h1 className='text-4xl text-white mb-4'>Welcome to Mithas Rooms B&B</h1>
            <p className='text-white max-w-[80%]'>Located in a historic building in the city center, our B&B provides a perfect base for immersing yourself in Catania&aposs unique culture and atmosphere. Our well-appointed rooms are designed with your comfort in mind, ensuring a pleasant stay. Each morning, savor a delicious Sicilian breakfast featuring fresh local specialties and aromatic coffee.</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Info