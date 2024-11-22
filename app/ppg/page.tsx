export default function Page() {
  return (
    <main className='container mx-auto px-4 py-8'>
      <h1 className='text-center text-lg font-bold text-blue-900 xl:text-4xl'>
        Produk Tridarma Mahasiswa PPG
      </h1>
      <div className='mt-8 grid grid-cols-2 space-x-4'>
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
    </main>
  )
}
