import { ChevronDown, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover hero-video-animate"
        poster="/assets/hero-bg.jpg"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,77,64,0.4) 0%, rgba(0,77,64,0.2) 50%, rgba(0,77,64,0.7) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-[800px] mx-auto">
        <h1 className="text-[3.5rem] lg:text-[5rem] font-bold text-white leading-[1.1] tracking-tight hero-title-animate"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          {t(translations.logo)}
        </h1>
        <p
          className="mt-4 text-lg lg:text-2xl text-white/90 font-light hero-subtitle-animate"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          {t(translations.heroSlogan)}
        </p>
        <a
          href="https://wa.me/996550855936"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base lg:text-lg transition-all duration-300 hover:-translate-y-0.5 hero-cta-animate"
          style={{
            backgroundColor: '#25D366',
            color: '#fff',
            boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
          }}
        >
          <MessageCircle size={22} />
          {t(translations.heroCta)}
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-scroll-animate">
        <a
          href="#categories"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center animate-bounce-scroll hover:bg-white/20 transition-colors"
        >
          <ChevronDown size={20} className="text-white/70" />
        </a>
      </div>
    </section>
  );
}
