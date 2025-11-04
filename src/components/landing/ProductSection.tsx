import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";

export default function ProductSection() {
  const productImage = PlaceHolderImages.find((p) => p.id === "dog-muzzle");

  if (!productImage) {
    return null;
  }

  return (
    <section id="product">
        <Card className="w-full max-w-sm overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl mx-auto">
          <CardHeader className="p-0">
            {/* <Image
              src={productImage.imageUrl}
              alt={productImage.description}
              width={400}
              height={400}
              className="aspect-square object-cover w-full"
              data-ai-hint={productImage.imageHint}
            /> */}
            <img src="./product.jpg" alt="" />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-headline">
              Breathable Mesh Muzzle
            </CardTitle>
            <CardDescription className="mt-2">
              Comfortable and safe for your beloved pet.
            </CardDescription>
            <div className="flex items-center mt-4">
              <div className="flex items-center text-yellow-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 text-gray-400 fill-current" />
              </div>
              <span className="text-muted-foreground text-sm ml-2">(123 reviews)</span>
            </div>
            <p className="text-2xl font-bold mt-4">$12.99</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Buy Now</Button>
          </CardFooter>
        </Card>
    </section>
  );
}
