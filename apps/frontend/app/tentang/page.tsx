import Content from './content.mdx'
import Image from 'next/image'
import SmallBanner from '@/public/banner-small.webp'

export default function Tentang() {
  return (
    <main className='container mx-auto mb-24 mt-2 p-4 xl:mt-16 xl:px-32'>
      <Image
        src={SmallBanner}
        alt='Organizer'
        className='container mx-auto w-full object-cover pb-12'
      />
      <article className='prose max-w-none xl:prose-xl'>
        <Content />
      </article>
    </main>
  )
}
