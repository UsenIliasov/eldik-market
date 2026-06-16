import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import CategoriesSection from '@/sections/CategoriesSection';
import PromoSection from '@/sections/PromoSection';
import WhyChooseSection from '@/sections/WhyChooseSection';
import ReviewsSection from '@/sections/ReviewsSection';
import LocationSection from '@/sections/LocationSection';
import WhatsAppContactSection from '@/sections/WhatsAppContactSection';
import WhatsAppCommunitySection from '@/sections/WhatsAppCommunitySection';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <PromoSection />
        <WhyChooseSection />
        <ReviewsSection />
        <LocationSection />
        <WhatsAppContactSection />
        <WhatsAppCommunitySection />
      </main>
      <Footer />
    </div>
  );
}
