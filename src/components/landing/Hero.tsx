"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import ProductSection from "./ProductSection";

export default function Hero() {
  const [headline, setHeadline] = useState("Scale Your Brand with Expert E-Commerce Solutions");
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover opacity-100"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 items-center">
          <div className="space-y-6 text-center">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              {headline}
            </h1>
            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
              Ohnso LLC provides elite product research, strategic sourcing, and data-driven PPC campaigns to accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">Get Your Free Consultation</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#about">Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
