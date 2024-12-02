import * as React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/app/header'
import Logo from '@/components/atom/logo'

export const metadata: Metadata = {
  title: 'Produk Tridarma PPG Universitas Negeri Malang',
  description: 'Produk Tridarma PPG Universitas Negeri Malang',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='id'>
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Footer() {
  return (
    <footer className='relative h-full w-full bg-blue-800 py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex-row'>
          <div className='flex flex-col justify-between pt-10 md:flex-row md:items-center md:pt-16'>
            <div className='flex scale-95 flex-col justify-center md:scale-100'>
              <Logo width={180} height={60} fillColor='#FAFAFA' />
              <span className='mt-2 text-[20px] text-white md:flex md:flex-wrap md:text-[24px]'>
                Produk Tridarma PPG UM
              </span>
            </div>
            <div className='mx-auto mt-10 hidden flex-col items-start justify-center space-x-0 space-y-5 md:mx-0 md:mt-0 md:flex md:flex-row md:space-x-6 md:space-y-0 lg:space-x-[60px]'>
              {/* <FooterPrevent /> */}
              {/* <FooterMainevent /> */}
            </div>
          </div>
          {/* <FooterSponsor /> */}
        </div>
        <hr className='md:bg-discolored-800 mt-10 h-[1px] bg-white md:mt-[67px]' />
        <p className='mt-3 pb-3 text-center text-[14px] font-semibold text-white md:mt-5 md:pb-10 md:text-right md:text-[16px]'>
          © 2024
          <a href='https://teknologipendidikan.or.id'>
            {' '}
            Teknologi Pendidikan ID (EDTECH-ID){' '}
          </a>{' '}
          &{' '}
          <a href='https://learningcenter.um.ac.id'>
            {' '}
            Learning Center Engineering Team (GovTech UM){' '}
          </a>
          <br /> Seluruh aset dilindungi Undang - Undang Hak Kekayaan
          Intelektual Yuridiksi Indonesia .
        </p>
      </div>
    </footer>
  )
}
