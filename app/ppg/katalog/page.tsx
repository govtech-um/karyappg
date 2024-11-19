import React from 'react'

export default function Catalogue() {
  return (
    <div className='container mx-auto my-4 px-2'>
      <h1 className='py-8 text-center text-7xl font-bold text-blue-950'>
        Katalog Karya Mahasiswa
      </h1>
      <div className='grid grid-cols-2 space-x-4'>
        <iframe
          src='https://drive.google.com/file/d/1SatCPyQHHVHeAAO7WSMfb41pXiAlYKxs/preview'
          width='1280'
          height='720'
          allow='autoplay'
          className='w-full items-center justify-center'
        ></iframe>

        <iframe
          src='https://drive.google.com/file/d/1mQDnpdvXlPheCaglaR9fwiqqhDgNWnqB/preview'
          width='1280'
          height='720'
          allow='autoplay'
          className='w-full items-center justify-center'
        ></iframe>
      </div>
    </div>
  )
}
