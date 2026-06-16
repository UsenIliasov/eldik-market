import {
  CheckCircle, TrendingDown, ShoppingBasket, Heart, MapPin, Percent,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { Lang } from '@/lib/translations';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>> = {
  CheckCircle, TrendingDown, ShoppingBasket, Heart, MapPin, Percent,
};

interface WhyItemProps {
  icon: string;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  lang: Lang;
  index: number;
}

export default function WhyItem({ icon, title, desc, lang, index }: WhyItemProps) {
  const ref = useScrollReveal<HTMLDivElement>({ staggerIndex: index });
  const IconComp = iconMap[icon];

  return (
    <div
      ref={ref}
      className="flex items-start gap-4 p-5 scroll-reveal glass-card"
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: 'rgba(46,125,50,0.08)' }}
      >
        {IconComp && (
          <IconComp size={26} strokeWidth={1.5} style={{ color: 'var(--color-accent)' }} />
        )}
      </div>
      <div>
        <h4 className="font-semibold text-base mb-1" style={{ color: 'var(--color-text-primary)' }}>
          {title[lang]}
        </h4>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {desc[lang]}
        </p>
      </div>
    </div>
  );
}
