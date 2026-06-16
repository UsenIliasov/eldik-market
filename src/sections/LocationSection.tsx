import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';
import SectionTitle from '@/components/SectionTitle';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function LocationSection() {
  const { t } = useLanguage();
  const mapRef = useScrollReveal<HTMLDivElement>();
  const infoRef = useScrollReveal<HTMLDivElement>({ staggerIndex: 2 });

  return (
    <section id="location" className="py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <SectionTitle title={t(translations.locTitle)} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Map */}
          <div ref={mapRef} className="scroll-reveal-scale rounded-2xl overflow-hidden" style={{ border: '1px solid var(--color-border)' }}>
            <iframe
              src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A42.874722%2C%22lon%22%3A74.612222%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22bishkek%22%7D%2C%22orgIds%22%3A%5B%2270000001104472332%22%5D%7D"
              width="100%"
              height="350"
              className="lg:h-[400px] w-full border-0"
              title="Eldik Market Location"
              loading="lazy"
            />
          </div>

          {/* Info */}
          <div
            ref={infoRef}
            className="glass-card p-8 scroll-reveal flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(46,125,50,0.1)' }}
                >
                  <MapPin size={20} strokeWidth={1.5} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>
                    {t(translations.locAddress)}
                  </h4>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                    {t(translations.locAddressVal)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(46,125,50,0.1)' }}
                >
                  <Clock size={20} strokeWidth={1.5} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>
                    {t(translations.locHours)}
                  </h4>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                    {t(translations.locHoursVal)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(46,125,50,0.1)' }}
                >
                  <Phone size={20} strokeWidth={1.5} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>
                    {t(translations.locContact)}
                  </h4>
                  <a
                    href="tel:+996550855936"
                    className="text-sm mt-1 block hover:underline"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {translations.locPhone}
                  </a>
                </div>
              </div>

              <a
                href="https://2gis.kg/bishkek/geo/70000001104472332"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-2gis mt-2"
              >
                <Navigation size={18} />
                {t(translations.locCta)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
