import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='container mx-auto px-4 py-12'>
      <h1 className='text-center text-lg font-bold text-blue-900 xl:text-4xl'>
        404 - Halaman Tidak Ditemukan
      </h1>
      <p className='mt-4 text-center'>
        Maaf, halaman yang Anda cari tidak ditemukan. Silakan kembali ke{' '}
        <Link className='text-blue-600 underline' href='/'>
          halaman utama
        </Link>
      </p>
    </main>
  )
}
