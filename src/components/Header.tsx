import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations, type Lang } from '@/lib/translations';

const navLinks = [
  { key: 'navCategories' as const, href: '#categories' },
  { key: 'navPromotions' as const, href: '#promotions' },
  { key: 'navAbout' as const, href: '#why' },
  { key: 'navContact' as const, href: '#contact' },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  });
  const [activeSection, setActiveSection] = useState('hero');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem('eldik-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDark(shouldDark);
    document.documentElement.classList.toggle('dark', shouldDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHasShadow(currentY > 50);
      if (currentY > lastScrollY.current && currentY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'categories', 'promotions', 'why', 'reviews', 'location', 'contact', 'community'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('eldik-theme', newDark ? 'dark' : 'light');
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${hasShadow ? 'shadow-md' : ''}`}
        style={{
          background: isDark ? 'rgba(10,18,16,0.95)' : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="transition-opacity hover:opacity-80 flex items-center"
            >
              <img
                src="/assets/logo.png"
                alt="Eldik Market"
                className="h-10 lg:h-12 w-auto rounded-lg"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`text-sm font-medium transition-colors hover:opacity-100 relative pb-1 ${
                    activeSection === link.href.slice(1)
                      ? 'opacity-100'
                      : 'opacity-60'
                  }`}
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {t(translations[link.key])}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                      activeSection === link.href.slice(1) ? 'w-full' : 'w-0'
                    }`}
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                </a>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <div className="hidden sm:flex items-center rounded-lg p-0.5" style={{ background: isDark ? 'rgba(255,255,255,0.08)' : '#f3f4f6' }}>
                {(['ky', 'ru', 'en'] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                      lang === l
                        ? isDark ? 'bg-white/10 shadow-sm' : 'bg-white shadow-sm'
                        : isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
                    }`}
                    style={lang === l ? { color: 'var(--color-accent)' } : {}}
                  >
                    {l === 'ky' ? 'КЫ' : l === 'ru' ? 'RU' : 'EN'}
                  </button>
                ))}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ background: isDark ? 'rgba(255,255,255,0.08)' : '#f3f4f6' }}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun size={18} style={{ color: 'var(--color-accent)' }} />
                ) : (
                  <Moon size={18} style={{ color: 'var(--color-accent)' }} />
                )}
              </button>

              {/* WhatsApp quick button (desktop) */}
              <a
                href="https://wa.me/996550855936"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-white text-sm font-medium transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ background: isDark ? 'rgba(255,255,255,0.08)' : '#f3f4f6' }}
                aria-label="Open menu"
              >
                <Menu size={20} style={{ color: 'var(--color-text-primary)' }} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] p-6 transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backgroundColor: 'var(--color-bg)' }}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: isDark ? 'rgba(255,255,255,0.08)' : '#f3f4f6' }}
          >
            <X size={20} style={{ color: 'var(--color-text-primary)' }} />
          </button>

          <div className="mt-16 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="py-3 px-4 rounded-xl text-base font-medium transition-colors"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {t(translations[link.key])}
              </a>
            ))}
          </div>

          <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
            {/* Mobile language switcher */}
            <div className="flex items-center gap-1 rounded-lg p-0.5 w-fit" style={{ background: isDark ? 'rgba(255,255,255,0.08)' : '#f3f4f6' }}>
              {(['ky', 'ru', 'en'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                    lang === l ? (isDark ? 'bg-white/10' : 'bg-white shadow-sm') : (isDark ? 'text-gray-400' : 'text-gray-500')
                  }`}
                  style={lang === l ? { color: 'var(--color-accent)' } : {}}
                >
                  {l === 'ky' ? 'КЫ' : l === 'ru' ? 'RU' : 'EN'}
                </button>
              ))}
            </div>

            <button
              onClick={() => { toggleTheme(); }}
              className="mt-4 flex items-center gap-2 py-3 px-4 rounded-xl text-base font-medium w-full transition-colors"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>

            <a
              href="https://wa.me/996550855936"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white text-base font-medium transition-all"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
