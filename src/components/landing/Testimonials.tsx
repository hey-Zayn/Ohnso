import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ohnso's product research was a game-changer for us. They identified a niche we hadn't considered, and it's now our best-selling category. Their insights are pure gold.",
    name: "Sarah Johnson",
    title: "CEO, Innovate Inc.",
    avatarId: "avatar-1",
  },
  {
    quote: "The sourcing team at Ohnso is incredible. They handled everything from negotiation to quality control, saving us time and money. I can't imagine our supply chain without them.",
    name: "Michael Chen",
    title: "Project Manager, Tech Solutions",
    avatarId: "avatar-2",
  },
  {
    quote: "Our ad spend has never been more effective. The PPC management from Ohnso LLC delivered a 200% increase in ROI within the first quarter. Highly recommended!",
    name: "Emily Rodriguez",
    title: "Founder, Creative Minds",
    avatarId: "avatar-3",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Loved by Brands Worldwide</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">
            Don't just take our word for it. Here's what our clients have to say about our impact.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 h-full">
                    <Card className="h-full flex flex-col bg-background shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="pt-8 flex-grow flex flex-col">
                        <Quote className="w-8 h-8 text-primary mb-4" />
                        <p className="flex-grow text-muted-foreground">
                          {testimonial.quote}
                        </p>
                      </CardContent>
                      <div className="flex items-center gap-4 p-6 border-t mt-4">
                        <Avatar>
                          {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />}
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold font-headline">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
