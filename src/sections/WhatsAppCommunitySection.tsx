import { Users } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';
import SectionTitle from '@/components/SectionTitle';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function WhatsAppCommunitySection() {
  const { t } = useLanguage();
  const qrRef = useScrollReveal<HTMLDivElement>();
  const textRef = useScrollReveal<HTMLDivElement>({ staggerIndex: 1 });

  return (
    <section id="community" className="py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <SectionTitle
          title={t(translations.commTitle)}
          subtitle={t(translations.commSubtitle)}
        />

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          {/* QR Code */}
          <div
            ref={qrRef}
            className="scroll-reveal flex-shrink-0"
          >
            <div
              className="p-4 rounded-2xl bg-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              style={{ border: '4px solid var(--color-accent)' }}
            >
              <img
                src="/assets/qr-whatsapp.jpg"
                alt="WhatsApp Community QR Code"
                className="w-[240px] h-[240px] lg:w-[280px] lg:h-[280px] rounded-xl object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className="scroll-reveal max-w-[400px] text-center lg:text-left"
          >
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {t(translations.commDesc)}
            </p>
            <a
              href="https://chat.whatsapp.com/GYRuUftu5mrDwtG4mG0IHm?s=cl&p=i&ilr=2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Users size={18} />
              {t(translations.commCta)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
