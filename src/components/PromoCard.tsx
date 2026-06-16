import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Tag, Star, MessageCircle, Navigation } from 'lucide-react';

interface PromoCardProps {
  icon: 'tag' | 'star';
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  ctaVariant: 'whatsapp' | '2gis';
  promoCode?: string;
  index: number;
}

export default function PromoCard({
  icon, title, description, ctaText, ctaLink, ctaVariant, promoCode, index,
}: PromoCardProps) {
  const ref = useScrollReveal<HTMLDivElement>({ staggerIndex: index });
  const IconComp = icon === 'tag' ? Tag : Star;
  const CtaIcon = ctaVariant === 'whatsapp' ? MessageCircle : Navigation;

  return (
    <div ref={ref} className="promo-card p-8 lg:p-12 scroll-reveal-scale">
      <div className="flex flex-col items-start gap-4">
        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
          <IconComp size={32} strokeWidth={1.5} className="text-white" />
        </div>

        <h3 className="text-xl lg:text-2xl font-bold text-white">{title}</h3>
        <p className="text-white/80 text-base leading-relaxed">{description}</p>

        {promoCode && (
          <div className="mt-2 px-6 py-3 bg-white/10 rounded-lg border-2 border-dashed border-white/50 animate-pulse-border">
            <code className="text-white text-xl font-mono font-bold tracking-widest">
              {promoCode}
            </code>
          </div>
        )}

        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 ${
            ctaVariant === 'whatsapp'
              ? 'bg-white text-[#2E7D32] hover:bg-gray-50'
              : 'bg-white text-[#2B8CFF] hover:bg-gray-50'
          }`}
        >
          <CtaIcon size={20} />
          {ctaText}
        </a>
      </div>
    </div>
  );
}
