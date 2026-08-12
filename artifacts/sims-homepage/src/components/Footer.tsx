import React from 'react';
import { Link } from 'wouter';
import { SITE_CONTENT } from '@/lib/site-content';
import { programPath } from '@/lib/programs';
import { Youtube, Facebook, Instagram, Phone, Mail, Globe, MapPin } from 'lucide-react';
import { SimsLogo } from '@/components/SimsLogo';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export function Footer() {
  return (
    <footer className="bg-sims-primary text-white pt-14 md:pt-16 lg:pt-20 pb-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 md:mb-14">
          
          {/* Column 1: Brand & Social */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <div className="bg-white p-3 rounded-xl w-full max-w-xs">
              <SimsLogo variant="footer" />
            </div>
            <div className="flex items-start gap-3 text-sims-border">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONTENT.footer.address.replace(/\n/g, ", "))}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm leading-relaxed text-left hover:text-amber-400 transition-colors underline-offset-2 hover:underline whitespace-pre-line"
              >
                {SITE_CONTENT.footer.address}
              </a>
            </div>
            <div className="flex gap-3">
              <a href={SITE_CONTENT.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 text-[#1877F2] flex items-center justify-center hover:bg-amber-500 hover:text-sims-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={SITE_CONTENT.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 text-[#E4405F] flex items-center justify-center hover:bg-amber-500 hover:text-sims-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={SITE_CONTENT.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/10 text-[#FF0000] flex items-center justify-center hover:bg-amber-500 hover:text-sims-primary transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={SITE_CONTENT.social.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/10 text-[#25D366] flex items-center justify-center hover:bg-amber-500 hover:text-sims-primary transition-all">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-base font-bold font-display mb-4 text-white border-b border-white/10 pb-3">Important Links</h4>
            <ul className="flex flex-col gap-2.5">
              {SITE_CONTENT.footer.links.map((link) => {
                const href =
                  link === 'About Us'
                    ? '/about'
                    : link === 'Vision & Mission'
                      ? '/vision-mission'
                      : link === 'Leadership Talk'
                        ? '/leadership'
                        : link === 'Awards & Highlights'
                          ? '/awards-highlights'
                          : link === 'Admission Procedure'
                            ? '/admissions'
                            : '/about';

                return (
                  <li key={link}>
                    <Link
                      href={href}
                      className="text-sims-border hover:text-amber-400 transition-colors text-sm flex items-center gap-2 leading-snug"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h4 className="text-base font-bold font-display mb-4 text-white border-b border-white/10 pb-3">Our Courses</h4>
            <ul className="flex flex-col gap-2.5">
              {SITE_CONTENT.footer.courses.map(course => (
                <li key={course.slug}>
                  <Link
                    href={programPath(course.slug)}
                    className="text-sims-border hover:text-amber-400 transition-colors text-sm flex items-center gap-2 leading-snug"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-base font-bold font-display mb-4 text-white border-b border-white/10 pb-3">Contact Us</h4>
            <div className="flex flex-col gap-3.5 text-sm text-sims-border">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-amber-500 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {SITE_CONTENT.footer.contact.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="hover:text-white transition-colors leading-snug"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-amber-500" />
                <a href={`mailto:${SITE_CONTENT.footer.contact.email}`} className="hover:text-white transition-colors break-all">
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
      <div className="border-t border-white/10 bg-black/20 py-5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sims-border/80 text-xs md:text-sm whitespace-pre-line leading-relaxed">
            {SITE_CONTENT.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
