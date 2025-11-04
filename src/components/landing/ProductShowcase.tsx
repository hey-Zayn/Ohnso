import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const showcaseImages = PlaceHolderImages.filter(p => p.id.startsWith('product-showcase'));

export default function ProductShowcase() {
  return (
    <section id="showcase" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">See Launchpad in Action</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">
            Explore the clean, intuitive interface that makes productivity a breeze.
          </p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {showcaseImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={800}
                        height={600}
                        className="aspect-video object-cover w-full"
                        data-ai-hint={image.imageHint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
