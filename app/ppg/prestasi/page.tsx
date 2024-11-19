import Link from 'next/link'
import * as React from 'react'
import Image from 'next/image'

type Photo = {
  uuid_karya: string
  uuid_peserta: string
  peserta: string
  title: string
  width: number
  height: number
  alt: string
  sizes: string
  src: string
  description: string
}

const toProperCase = (str: string) => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  )
}

const SHEETS = 'ppg-prestasi'
const DATA_ENDPOINT = `${process.env.SPREADSHEET_ENDPOINT}/${SHEETS}?key=${process.env.GAPI_SPREADSHEETS}&majorDimension=COLUMNS`

export default async function PrestasiMahasiswa() {
  const photos: Photo[] = []
  await fetch(DATA_ENDPOINT)
    .then((response) => response.json())
    .then((json) => {
      const data = json.values
      const uuid_karya = data[0]
      const peserta = data[1]
      const uuid_peserta = data[2]
      const judul_karya = data[3]
      const desc_karya = data[4]
      const width = data[5]
      const height = data[6]
      const src = data[8]

      for (let i = 1; i < data[0].length; i += 1) {
        const item = {
          uuid_karya: uuid_karya[i],
          peserta: peserta[i],
          uuid_peserta: uuid_peserta[i],
          title: judul_karya[i],
          alt: judul_karya[i],
          sizes: '0',
          width: width[i],
          height: height[i],
          src: src[i],
          description: desc_karya[i],
        }
        photos.push(item)
      }
    })

  return (
    <div className='container mx-auto my-4 px-2'>
      <h1 className='py-8 text-center text-7xl font-bold text-blue-950'>
        Prestasi Mahasiswa PPG UM
      </h1>

      <div className='grid grid-cols-1 gap-8 px-4 pb-24 xl:grid-cols-4'>
        {photos.map((item) => (
          <Link
            className='flex flex-col items-start justify-start space-y-2 rounded border-2 border-blue-700 p-4 transition duration-500 ease-in-out hover:scale-110'
            key={item.uuid_karya}
            href='#'
          >
            <div className='flex w-full items-center justify-center'>
              <Image
                className='rounded object-cover'
                src={item.src}
                alt={item.title}
                width={500}
                height={500}
                id={`img-${item.uuid_karya}`}
              />
            </div>
            <div className='flex w-full flex-col justify-between'>
              <h2 className='text-xl font-bold'>{item.title}</h2>
              {/* <p className='line-clamp-5 text-base'>{item.description}</p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
