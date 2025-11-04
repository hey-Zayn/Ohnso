import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Linkedin, Mail, Phone, MapPin, Facebook } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Footer() {
  const companyInfo = {
    name: "Ohnso LLC",
    email: "info@ohnso.com",
    phone: "+1 346-469-6953",
    address: "5900 Balcones Drive #27566, Austin, TX, 78731, USA"
  };

  const logoImage = PlaceHolderImages.find(p => p.id === 'company-logo');

  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex items-center gap-0 font-headline text-xl font-bold">
              <img src="./Hassan_Mustafa_logo.jpg" alt="" className='w-[100px]'/>
              <span>Ohnso</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-foreground">{companyInfo.email}</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="hover:text-foreground">{companyInfo.phone}</a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <address className="not-italic">{companyInfo.address}</address>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="flex px-6 flex-col items-center md:items-end space-y-4">
            <h3 className="font-headline text-lg font-semibold">Follow Us</h3>
            <div className="flex items-center gap-4">

              <Link href="#" className="flex items-center  gap-1">
                <Facebook className="h-5 w-5" />
                <span className="">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}