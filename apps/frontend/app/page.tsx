import Link from 'next/link'
import Image from 'next/image'
import ProductCategoryCards from '@/components/organism/productCategoryCards'
import OrganizerImage from '@/public/banner-organizer.webp'
import SmallBanner from '@/public/banner-small.webp'
import HeroBannerImage from '@/public/hero-banner.webp'

const SHEETS = `jenis-karya`
const DATA_ENDPOINT = `${process.env.SPREADSHEET_ENDPOINT}/${SHEETS}?key=${process.env.GAPI_SPREADSHEETS}&majorDimension=COLUMNS`

type ProductCategory = {
  title: string
  desc: string
  link: string
  category: string
  image: string
}

export default async function Home() {
  const content: ProductCategory[] = []
  await fetch(DATA_ENDPOINT)
    .then((response) => response.json())
    .then((json) => {
      const data = json.values
      const title = data[0]
      const desc = data[1]
      const link = data[2]
      const category = data[3]
      const image = data[4]

      for (let i = 1; i < data[0].length; i += 1) {
        const item = {
          title: title[i],
          desc: desc[i],
          link: link[i],
          category: category[i],
          image: image[i],
        }
        content.push(item)
      }
    })

  return (
    <main>
      <HeroBanner />
      <main>
        <section id='main-content' className='container mx-auto px-4 py-12'>
          {/* Produk Mahasiswa */}
          <div id='produk-mahasiswa' className='mb-8'>
            <h2 className='text-xl font-bold text-blue-800 2xl:text-4xl'>
              Produk Tridarma Mahasiswa PPG
            </h2>
            <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
              {content
                .filter((item) => item.category === 'mahasiswa')
                .map((item) => (
                  <ProductCategoryCards
                    key={item.link}
                    title={item.title}
                    description={item.desc}
                    image={item.image}
                    link={item.link}
                  />
                ))}
            </div>
          </div>

          <Image
            src={SmallBanner}
            alt='Organizer'
            className='container mx-auto w-full object-cover pb-12'
          />

          {/* Produk Penelitian */}
          <div id='produk-mahasiswa' className='mb-8'>
            <h2 className='text-xl font-bold text-blue-800 2xl:text-4xl'>
              Produk Penelitian PPG
            </h2>
            <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
              {content
                .filter((item) => item.category === 'penelitian')
                .map((item) => (
                  <ProductCategoryCards
                    key={item.link}
                    title={item.title}
                    description={item.desc}
                    image={item.image}
                    link={item.link}
                  />
                ))}
            </div>
          </div>

          {/* Produk Pengabdian */}
          {/* <div id='produk-mahasiswa' className='mb-8'>
            <h2 className='text-xl font-bold text-blue-800 2xl:text-4xl'>
              Produk Pengabdian PPG
            </h2>
            <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
              {content
                .filter((item) => item.category === 'pengabdian')
                .map((item) => (
                  <ProductCategoryCards
                    key={item.link}
                    title={item.title}
                    description={item.desc}
                    image={item.image}
                    link={item.link}
                  />
                ))}
            </div>
          </div> */}

          <Image
            src={OrganizerImage}
            alt='Organizer'
            className='container mx-auto w-full object-cover py-12'
          />
        </section>
      </main>
    </main>
  )
}

function HeroBanner() {
  return (
    <section id='hero-banner' className='relative hidden lg:block'>
      <Image
        src={HeroBannerImage}
        alt='Hero Banner'
        className='h-screen max-h-screen w-full object-cover object-right-bottom'
      />
      <div id='hero-content' className='absolute bottom-10 w-full'>
        <div className='flex max-w-2xl flex-col items-start justify-start space-y-4 pt-32 lg:p-12'>
          <h1 className='bg-blue-400 p-3 text-4xl font-bold text-black'>
            Produk Tridarma Pendidikan Profesi Guru (PPG) Sekolah Pascasarjana
            UM
          </h1>
          <p className='line-clamp-4 hidden bg-green-700 p-3 text-base text-white lg:line-clamp-none lg:block'>
            Selamat datang di Produk Tridarma Pendidikan Profesi Guru (PPG).
          </p>
          {/* <Link
              href={"/ppg/"}
              className="line-clamp-4 hidden bg-yellow-400 p-3 text-base text-black lg:line-clamp-none lg:block transition ease-in-out duration-500 hover:scale-110"
            >
              Daftar Produk Tridarma Mahasiswa PPG
            </Link>
            <Link
              href={"/ppm/penelitian"}
              className="line-clamp-4 hidden bg-yellow-400 p-3 text-base text-black lg:line-clamp-none lg:block transition ease-in-out duration-500 hover:scale-110"
            >
              Daftar Luaran Penelitian PPG
            </Link>
            <Link
              href={"/ppm/pengabdian"}
              className="line-clamp-4 hidden bg-yellow-400 p-3 text-base text-black lg:line-clamp-none lg:block transition ease-in-out duration-500 hover:scale-110"
            >
              Daftar Luaran Pengabdian PPG
            </Link> */}
        </div>
      </div>
      <div
        id='hero-bottomline'
        className='absolute bottom-0 flex w-full items-center justify-center bg-yellow-400'
      >
        <Link
          href='#thematic-content'
          className='p-2 text-center text-lg font-bold text-black underline hover:text-white focus:text-white'
        >
          Explorasi Produk Tridarma Pendidikan Profesi Guru (PPG) Universitas
          Negeri Malang
        </Link>
      </div>
    </section>
  )
}
