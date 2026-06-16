import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function WhatsAppContactSection() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div
        ref={sectionRef}
        className="max-w-[700px] mx-auto px-5 lg:px-10 scroll-reveal"
      >
        <div
          className="rounded-3xl p-10 lg:p-16 text-center flex flex-col items-center"
          style={{
            background: 'linear-gradient(135deg, #00695C 0%, #004D40 50%, #2E7D32 100%)',
          }}
        >
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 animate-pulse-icon">
            <MessageCircle size={40} className="text-white" strokeWidth={1.5} />
          </div>

          <h2
            className="text-2xl lg:text-3xl font-bold text-white"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
          >
            {t(translations.waTitle)}
          </h2>
          <p className="mt-4 text-base text-white/85 leading-relaxed">
            {t(translations.waDesc)}
          </p>

          <a
            href="https://wa.me/996550855936"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 px-10 py-5 rounded-xl font-semibold text-base lg:text-lg transition-all duration-300 hover:-translate-y-0.5 bg-white"
            style={{
              color: '#2E7D32',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            }}
          >
            <MessageCircle size={22} />
            {t(translations.waCta)}
          </a>
        </div>
      </div>
    </section>
  );
}
