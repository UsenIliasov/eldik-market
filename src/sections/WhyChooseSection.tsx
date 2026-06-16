import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';
import SectionTitle from '@/components/SectionTitle';
import WhyItem from '@/components/WhyItem';

export default function WhyChooseSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="why" className="py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <SectionTitle
          title={t(translations.whyTitle)}
          subtitle={t(translations.whySubtitle)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {translations.whyItems.map((item, i) => (
            <WhyItem
              key={item.icon}
              icon={item.icon}
              title={{
                ky: item.ky.title,
                ru: item.ru.title,
                en: item.en.title,
              }}
              desc={{
                ky: item.ky.desc,
                ru: item.ru.desc,
                en: item.en.desc,
              }}
              lang={lang}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
