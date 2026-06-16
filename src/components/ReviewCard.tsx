import StarRating from './StarRating';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { Lang } from '@/lib/translations';

interface ReviewCardProps {
  name: string;
  rating: number;
  text: Record<Lang, string>;
  avatar: string;
  lang: Lang;
  index: number;
}

export default function ReviewCard({ name, rating, text, avatar, lang, index }: ReviewCardProps) {
  const ref = useScrollReveal<HTMLDivElement>({ staggerIndex: index });

  return (
    <div ref={ref} className="glass-card p-6 scroll-reveal flex-shrink-0 w-[300px] lg:w-auto snap-start">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <h4 className="font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>
            {name}
          </h4>
          <StarRating rating={rating} size={14} />
        </div>
      </div>
      <p
        className="text-sm leading-relaxed italic"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        &ldquo;{text[lang]}&rdquo;
      </p>
    </div>
  );
}
