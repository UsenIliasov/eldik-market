import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';
import SectionTitle from '@/components/SectionTitle';
import PromoCard from '@/components/PromoCard';

export default function PromoSection() {
  const { t } = useLanguage();

  return (
    <section id="promotions" className="py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <SectionTitle
          title={t(translations.promoTitle)}
          subtitle={t(translations.promoSubtitle)}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PromoCard
            icon="tag"
            title={t(translations.promo1Title)}
            description={t(translations.promo1Desc)}
            ctaText={t(translations.promo1Cta)}
            ctaLink="https://wa.me/996550855936"
            ctaVariant="whatsapp"
            promoCode="SPORT"
            index={0}
          />
          <PromoCard
            icon="star"
            title={t(translations.promo2Title)}
            description={t(translations.promo2Desc)}
            ctaText={t(translations.promo2Cta)}
            ctaLink="https://2gis.kg/bishkek/geo/70000001104472332"
            ctaVariant="2gis"
            index={1}
          />
        </div>
      </div>
    </section>
  );
}
