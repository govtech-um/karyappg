'use client'

import * as React from 'react'
import Logo from '@/components/atom/logo'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { usePathname } from 'next/navigation'

// Header component
const ProdukMahasiswaPPG = [
  {
    title: 'Artikel Ilmiah',
    url: '/ppg/artikel',
    description:
      'Artikel ilmiah yang diterbitkan di jurnal nasional dan internasional',
  },
  {
    title: 'Media Pembelajaran',
    url: '/ppg/media',
    description: 'Media pembelajaran fisik dan digital yang dikembangkan',
  },
  {
    title: 'Prestasi Mahasiswa',
    url: '/ppg/prestasi',
    description:
      'Prestasi yang diraih oleh mahasiswa PPG Universitas Negeri Malang',
  },
  {
    title: 'Katalog Karya',
    url: '/ppg/katalog',
    description: 'Katalog karya mahasiswa PPG Universitas Negeri Malang',
  },
]

const LuaranPenelitian = [
  {
    title: 'Hak Kekayaan Intelektual (HKI)',
    url: '/ppm/penelitian/hki',
    description: 'Hak kekayaan intelektual yang dihasilkan dari penelitian',
  },
  {
    title: 'Publikasi Media Massa',
    url: '/ppm/penelitian/pressrelease',
    description: 'Press release penelitian yang diterbitkan di media massa',
  },
  {
    title: 'Poster Penelitian',
    url: '/ppm/penelitian/poster',
    description: 'Poster penelitian yang dihasilkan dari penelitian',
  },
  {
    title: 'Artikel Ilmiah',
    url: '/ppm/penelitian/artikel',
    description:
      'Artikel ilmiah yang diterbitkan di jurnal nasional dan internasional',
  },
]

const LuaranPengabdian = [
  {
    title: 'Hak Kekayaan Intelektual (HKI)',
    url: '/ppm/pengabdian/hki',
    description: 'Hak kekayaan intelektual yang dihasilkan dari penelitian',
  },
  {
    title: 'Publikasi Media Massa',
    url: '/ppm/pengabdian/pressrelease',
    description: 'Press release penelitian yang diterbitkan di media massa',
  },
  {
    title: 'Poster Pengabdian',
    url: '/ppm/pengabdian/poster',
    description: 'Poster pengabdian yang dihasilkan dari pengabdian',
  },
  {
    title: 'Artikel Ilmiah',
    url: '/ppm/pengabdian/artikel',
    description:
      'Artikel ilmiah yang diterbitkan di jurnal nasional dan internasional',
  },
]

export function Header() {
  const path = usePathname()
  const isRoot = path === '/'
  return (
    <header
      className={`${
        isRoot ? 'fixed left-0 top-0 z-10' : 'block'
      } w-full bg-white`}
    >
      <nav className='container mx-auto flex items-center justify-between p-4'>
        <Link href='/' passHref>
          <Logo width={180} height={60} />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {/* Tentang Kami */}
            <NavigationMenuItem>
              <Link href='/tentang' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Tentang Kami
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Roadmap PPM */}
            <NavigationMenuItem>
              <Link href='/roadmap' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Roadmap Penelitian
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Produk Mahasiswa */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                Mahasiswa
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                  {ProdukMahasiswaPPG.map((item) => (
                    <ListItem key={item.url} title={item.title} href={item.url}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Luaran Penelitian */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                Penelitian
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                  {LuaranPenelitian.map((item) => (
                    <ListItem key={item.url} title={item.title} href={item.url}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Luaran Pengabdian */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                Pengabdian
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                  {LuaranPengabdian.map((item) => (
                    <ListItem key={item.url} title={item.title} href={item.url}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* End */}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
