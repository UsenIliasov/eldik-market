import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';
import SectionTitle from '@/components/SectionTitle';
import ReviewCard from '@/components/ReviewCard';

export default function ReviewsSection() {
  const { lang, t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <SectionTitle
          title={t(translations.reviewTitle)}
          subtitle={t(translations.reviewSubtitle)}
        />

        <div className="relative">
          {/* Navigation arrows (desktop) */}
          <button
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center shadow-md hover:-translate-y-1/2 hover:scale-105 transition-all"
            style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
          >
            <ChevronLeft size={20} style={{ color: 'var(--color-text-primary)' }} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center shadow-md hover:-translate-y-1/2 hover:scale-105 transition-all"
            style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
          >
            <ChevronRight size={20} style={{ color: 'var(--color-text-primary)' }} />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-3 snap-x snap-mandatory pb-4 lg:pb-0 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {translations.reviews.map((review, i) => (
              <ReviewCard
                key={review.name}
                name={review.name}
                rating={review.rating}
                text={{ ky: review.ky, ru: review.ru, en: review.en }}
                avatar={review.avatar}
                lang={lang}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
