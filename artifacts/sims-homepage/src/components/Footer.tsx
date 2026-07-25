import React from 'react';
import { SITE_CONTENT } from '@/lib/site-content';
import { Youtube, Facebook, Instagram, Phone, Mail, Globe, MapPin } from 'lucide-react';
import simsLogo from '@assets/Shushila_Institute_Of-removebg-preview-1-e1743436624699.png';

export function Footer() {
  return (
    <footer className="bg-sims-primary text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-3 rounded-xl">
              <img
                src={simsLogo}
                alt="Sushila Institute of Medical Sciences"
                className="w-full h-auto max-h-16 object-contain object-left"
              />
            </div>
            <div className="flex items-start gap-3 text-sims-border">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-amber-500" />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONTENT.footer.address.replace(/\n/g, ", "))}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm leading-relaxed text-left hover:text-amber-400 transition-colors underline-offset-2 hover:underline whitespace-pre-line"
              >
                {SITE_CONTENT.footer.address}
              </a>
            </div>
            <div className="flex gap-4 mt-2">
              <a href={SITE_CONTENT.social.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-sims-primary transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={SITE_CONTENT.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-sims-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={SITE_CONTENT.social.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-sims-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-lg font-bold font-display mb-6 text-white border-b border-white/10 pb-4">Important Links</h4>
            <ul className="flex flex-col gap-3">
              {SITE_CONTENT.footer.links.map(link => (
                <li key={link}>
                  <a href="#" className="text-sims-border hover:text-amber-400 transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-500" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h4 className="text-lg font-bold font-display mb-6 text-white border-b border-white/10 pb-4">Our Courses</h4>
            <ul className="flex flex-col gap-3">
              {SITE_CONTENT.footer.courses.map(course => (
                <li key={course}>
                  <a href="#programs" className="text-sims-border hover:text-amber-400 transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-500" />
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold font-display mb-6 text-white border-b border-white/10 pb-4">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm text-sims-border">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-amber-500" />
                <div className="flex flex-col gap-1">
                  {SITE_CONTENT.footer.contact.phones.map(phone => (
                    <a key={phone} href={`tel:${phone}`} className="hover:text-white transition-colors">{phone}</a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-amber-500" />
                <a href={`mailto:${SITE_CONTENT.footer.contact.email}`} className="hover:text-white transition-colors">
                  {SITE_CONTENT.footer.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 flex-shrink-0 text-amber-500" />
                <a href={`https://${SITE_CONTENT.footer.contact.web}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {SITE_CONTENT.footer.contact.web}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Strip */}
      <div className="border-t border-white/10 bg-black/20 py-6">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sims-border/70 text-sm whitespace-pre-line leading-relaxed">
            {SITE_CONTENT.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}