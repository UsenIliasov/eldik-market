import {
  ShoppingBasket, Milk, Croissant, Apple, Carrot, Wine,
  Dumbbell, Cookie, Sparkles, Heart, Baby, Snowflake,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { Lang } from '@/lib/translations';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>> = {
  ShoppingBasket, Milk, Croissant, Apple, Carrot, Wine,
  Dumbbell, Cookie, Sparkles, Heart, Baby, Snowflake,
};

interface CategoryCardProps {
  icon: string;
  name: Record<Lang, string>;
  lang: Lang;
  index: number;
}

export default function CategoryCard({ icon, name, lang, index }: CategoryCardProps) {
  const ref = useScrollReveal<HTMLDivElement>({ staggerIndex: index });
  const IconComponent = iconMap[icon];

  return (
    <div
      ref={ref}
      className="glass-card p-6 flex flex-col items-center text-center gap-3 scroll-reveal cursor-default group"
    >
      {IconComponent && (
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: 'rgba(46,125,50,0.1)' }}
        >
          <IconComponent size={28} strokeWidth={1.5} style={{ color: 'var(--color-accent)' }} />
        </div>
      )}
      <h3
        className="text-base lg:text-lg font-semibold"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {name[lang]}
      </h3>
    </div>
  );
}
