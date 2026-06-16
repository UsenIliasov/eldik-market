import { MapPin, Phone, Clock, MessageCircle, Navigation } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { t } = useLanguage();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-bg-custom" id="footer">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src="/assets/logo.png"
              alt="Eldik Market"
              className="h-12 w-auto rounded-lg mb-3"
            />
            <p className="text-sm text-green-100/80 leading-relaxed">
              {t(translations.footerTagline)}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-base">
              {t(translations.footerLinksTitle)}
            </h4>
            <ul className="space-y-2">
              {[
                { label: translations.navHome, href: '#hero' },
                { label: translations.navCategories, href: '#categories' },
                { label: translations.navPromotions, href: '#promotions' },
                { label: translations.navAbout, href: '#why' },
                { label: translations.navContact, href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm text-green-100/70 hover:text-white transition-colors"
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-base">
              {t(translations.footerContactTitle)}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-green-100/70">
                <MapPin size={16} />
                <span>{t(translations.locAddressVal)}</span>
              </li>
              <li>
                <a
                  href="tel:+996550855936"
                  className="flex items-center gap-2 text-sm text-green-100/70 hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  <span>{translations.locPhone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-green-100/70">
                <Clock size={16} />
                <span>{t(translations.locHoursVal)}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-base">
              {t(translations.footerSocialTitle)}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/996550855936"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 px-4 rounded-lg text-white text-sm font-medium transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="https://2gis.kg/bishkek/geo/70000001104472332"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 px-4 rounded-lg text-white text-sm font-medium transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: '#2B8CFF' }}
              >
                <Navigation size={16} />
                2GIS
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          <p className="text-xs text-green-200/60">
            {translations.footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
