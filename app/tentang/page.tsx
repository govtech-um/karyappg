import Content from "./content.mdx";
import Image from "next/image";
import SmallBanner from "@/public/banner-small.webp";

export default function Tentang() {
  return (
    <main className="container mx-auto p-4 xl:px-32 mt-2 xl:mt-16 mb-24">
      <Image
        src={SmallBanner}
        alt="Organizer"
        className="w-full object-cover container mx-auto pb-12"
      />
      <article className="prose xl:prose-xl max-w-none">
        <Content />
      </article>
    </main>
  );
}
