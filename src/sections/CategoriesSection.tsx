import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';
import SectionTitle from '@/components/SectionTitle';
import CategoryCard from '@/components/CategoryCard';

export default function CategoriesSection() {
  const { lang, t } = useLanguage();
  const dividerRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <div ref={dividerRef} className="section-divider scroll-reveal" />
      <section id="categories" className="py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <SectionTitle
            title={t(translations.catTitle)}
            subtitle={t(translations.catSubtitle)}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {translations.categories.map((cat, i) => (
              <CategoryCard
                key={cat.icon}
                icon={cat.icon}
                name={{ ky: cat.ky, ru: cat.ru, en: cat.en }}
                lang={lang}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
