"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#product", label: "Product" },
  { href: "#testimonials", label: "Testimonial" },
  { href: "#faq", label: "FAQS" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoImage = PlaceHolderImages.find(p => p.id === 'company-logo');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-0 font-headline text-xl font-bold">
          {/* {logoImage && (
            <Image
              src={logoImage.imageUrl}
              alt={logoImage.description}
              width={32}
              height={32}
              data-ai-hint={logoImage.imageHint}
            />
          )} */}
          <img src="./Hassan_Mustafa_logo.jpg" alt="" className="w-[100px]"/>
          <span>Ohnso</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Contact Us</Link>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold" onClick={closeMenu}>
                  {logoImage && (
                    <Image
                      src={logoImage.imageUrl}
                      alt={logoImage.description}
                      width={24}
                      height={24}
                      data-ai-hint={logoImage.imageHint}
                    />
                  )}
                  <span>Ohnso</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg hover:text-accent transition-colors" onClick={closeMenu}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild>
                  <Link href="#contact" onClick={closeMenu}>Contact Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
