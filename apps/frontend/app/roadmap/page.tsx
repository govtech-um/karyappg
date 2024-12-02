import React from 'react'

export default function Gallery() {
  return (
    <main className='container mx-auto px-4'>
      <h1 className='py-8 text-center text-4xl font-bold text-blue-950 lg:text-7xl'>
        Roadmap Penelitian 2024 - 2028
      </h1>
      <div className='grid grid-cols-1 space-x-4'>
        <iframe
          title='Roadmap Penelitian PPG UM'
          src='https://drive.google.com/file/d/1IMCMxVyBFaHRkoI0GZbhiusII4KgE_Hw/preview'
          width='1280'
          height='1280'
          allow='autoplay'
          className='w-full py-6'
        ></iframe>
      </div>
    </main>
  )
}
