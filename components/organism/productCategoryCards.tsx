import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type ProductCategoryCardsProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function ProductCategoryCards({
  title = "Card Title",
  description = "Card Description",
  image = "/hero-banner.webp",
  link = "/",
}: ProductCategoryCardsProps) {
  return (
    <Link
      href={link}
      className="hover:scale-105 transition ease-in-out duration-500 hover:shadow-xl hover:shadow-blue-200"
    >
      <Card>
        <Image
          className="aspect-[3/1] w-full rounded-t-lg object-cover object-right-top"
          src={image}
          alt=""
          width={500}
          height={200}
          unoptimized
        />
        <CardHeader>
          <CardTitle className="font-bold text-blue-950 hover:underline">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
