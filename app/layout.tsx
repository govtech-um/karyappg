import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import "./globals.css";

import Logo from "@/components/atom/logo";

export const metadata: Metadata = {
  title: "Produk Tridarma PPG Universitas Negeri Malang",
  description: "Produk Tridarma PPG Universitas Negeri Malang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// Header component
const ProdukMahasiswaPPG = [
  {
    title: "Artikel Ilmiah",
    url: "ppg/artikel",
    description:
      "Artikel ilmiah yang diterbitkan di jurnal nasional dan internasional",
  },
  {
    title: "Media Pembelajaran",
    url: "ppg/media",
    description: "Media pembelajaran fisik dan digital yang dikembangkan",
  },
  {
    title: "Prestasi Mahasiswa",
    url: "ppg/prestasi",
    description:
      "Prestasi yang diraih oleh mahasiswa PPG Universitas Negeri Malang",
  },
];

const LuaranPenelitian = [
  {
    title: "Hak Kekayaan Intelektual (HKI)",
    url: "ppm/penelitian/hki",
    description: "Hak kekayaan intelektual yang dihasilkan dari penelitian",
  },
  {
    title: "Publikasi Media Massa",
    url: "ppm/penelitian/pressrelease",
    description: "Press release penelitian yang diterbitkan di media massa",
  },
];

const LuaranPengabdian = [
  {
    title: "Hak Kekayaan Intelektual (HKI)",
    url: "ppm/pengabdian/hki",
    description: "Hak kekayaan intelektual yang dihasilkan dari penelitian",
  },
  {
    title: "Publikasi Media Massa",
    url: "ppm/pengabdian/pressrelease",
    description: "Press release penelitian yang diterbitkan di media massa",
  },
];

function Header() {
  return (
    <header className="fixed top-0 left-0 z-10 bg-white w-full">
      <nav className="flex items-center justify-between p-4 mx-auto container">
        <Link href="/" passHref>
          <Logo width={180} height={60} />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {/* Tentang Kami */}
            <NavigationMenuItem>
              <Link href="/tentang" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Tentang Kami
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Roadmap PPM */}
            <NavigationMenuItem>
              <Link href="/roadmap" legacyBehavior passHref>
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
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function Footer() {
  return (
    <footer className="relative w-full bg-blue-800 h-full py-12">
      <div className="mx-auto container px-4">
        <div className="flex-row">
          <div className="flex flex-col justify-between md:flex-row md:items-center pt-10 md:pt-16">
            <div className="flex flex-col justify-center scale-95 md:scale-100">
              <Logo width={180} height={60} fillColor="#FAFAFA" />
              <span className="text-white mt-2 text-[20px] md:text-[24px] md:flex md:flex-wrap">
                Produk Tridarma PPG UM
              </span>
            </div>
            <div className="hidden md:flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-6 lg:space-x-[60px] items-start justify-center mx-auto md:mx-0 mt-10 md:mt-0">
              {/* <FooterPrevent /> */}
              {/* <FooterMainevent /> */}
            </div>
          </div>
          {/* <FooterSponsor /> */}
        </div>
        <hr className="h-[1px] bg-white md:bg-discolored-800 mt-10 md:mt-[67px]" />
        <p className="text-white font-semibold text-[14px] md:text-[16px] mt-3 pb-3 md:mt-5 md:pb-10 text-center md:text-right">
          © 2024
          <a href="https://teknologipendidikan.or.id">
            {" "}
            Teknologi Pendidikan ID (EDTECH-ID){" "}
          </a>{" "}
          &{" "}
          <a href="https://learningcenter.um.ac.id">
            {" "}
            Learning Center Engineering Team (GovTech UM){" "}
          </a>
          <br /> Seluruh aset dilindungi Undang - Undang Hak Kekayaan
          Intelektual Yuridiksi Indonesia .
        </p>
      </div>
    </footer>
  );
}
