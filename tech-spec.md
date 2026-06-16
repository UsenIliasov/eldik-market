# Eldik Market — Техническая спецификация

## Зависимости

### Production

| Пакет | Версия | Назначение |
|-------|--------|------------|
| react | ^19.0.0 | UI-фреймворк |
| react-dom | ^19.0.0 | React DOM рендерер |
| react-router-dom | ^7.0.0 | Маршрутизация (единственная страница, но будущие страницы) |

### Development

| Пакет | Версия | Назначение |
|-------|--------|------------|
| vite | ^6.0.0 | Сборщик |
| @vitejs/plugin-react | ^4.0.0 | React-плагин для Vite |
| tailwindcss | ^4.0.0 | CSS-фреймворк |
| @tailwindcss/vite | ^4.0.0 | Плагин Tailwind для Vite |
| typescript | ^5.7.0 | Типизация |
| @types/react | ^19.0.0 | Типы React |
| @types/react-dom | ^19.0.0 | Типы React DOM |
| @types/node | ^22.0.0 | Типы Node.js |

---

## Инвентарь компонентов

### Layout (общие)

| Компонент | Источник | Переиспользование |
|-----------|----------|-------------------|
| Header | Кастомный | Единственный — фиксированная шапка с blur-фоном, гамбургер-меню на мобильном, скрытие/появление по направлению скролла |
| Footer | Кастомный | Единственный — 4-колоночная сетка с брендом, ссылками, контактами и соцсетями |

### Секции (page-level)

| Компонент | Источник |
|-----------|----------|
| HeroSection | Кастомный |
| CategoriesSection | Кастомный |
| PromoSection | Кастомный |
| WhyChooseSection | Кастомный |
| ReviewsSection | Кастомный |
| LocationSection | Кастомный |
| WhatsAppContactSection | Кастомный |
| WhatsAppCommunitySection | Кастомный |

### Переиспользуемые компоненты

| Компонент | Источник | Переиспользование |
|-----------|----------|-------------------|
| PrimaryButton | Кастомный | Все CTA-кнопки WhatsApp + 2GIS (пропс `variant: 'primary' \| '2gis' \| 'ghost'` для разных стилей) |
| CategoryCard | Кастомный | 12 карточек в сетке категорий |
| PromoCard | Кастомный | 2 промо-карточки (SPORT + 2GIS review) |
| ReviewCard | Кастомный | 5 карточек отзывов |
| WhyItem | Кастомный | 6 элементов преимуществ |
| SectionTitle | Кастомный | Заголовок + подзаголовок для каждой секции (h2 + body text) |
| ScrollReveal | Кастомный | Обёртка для всех scroll-triggered анимаций на странице |
| LanguageSwitcher | Кастомный | Единственный — сегментированная группа кнопок KY/RU/EN |
| ThemeToggle | Кастомный | Единственный — кнопка с иконкой Sun/Moon |
| MobileMenu | Кастомный | Единственный — fullscreen overlay для мобильной навигации |
| StarRating | Кастомный | 5 карточек отзывов (5 звёзд, заполненных/пустых) |
| SectionDivider | Кастомный | Декоративная линия между секциями |

### Хуки

| Хук | Назначение |
|-----|------------|
| useScrollReveal | IntersectionObserver с однократным срабатыванием, поддержка stagger-задержки через data-атрибут |
| useScrollDirection | Определение направления скролла для показа/скрытия Header |
| useActiveSection | Отслеживание активной секции по якорям для подсветки навигации |

---

## Таблица анимаций

| Анимация | Библиотека | Подход | Сложность |
|----------|------------|--------|-----------|
| Hero entrance sequence (стаггер: видео → заголовок → подзаголовок → CTA → scroll indicator) | CSS transitions | Каскад CSS-классов с animation-delay (0ms / 200ms / 400ms / 600ms / 800ms). Каждый элемент: opacity + translateY. | Low |
| Scroll-triggered fade-in (все секции) | Кастомный hook `useScrollReveal` | IntersectionObserver (threshold 0.15, once). Класс `.is-visible` добавляет opacity:1 + translateY(0). Элементы без стаггера. | Medium |
| Staggered card reveal (сетки категорий, преимуществ, отзывов) | Кастомный hook `useScrollReveal` | Тот же IntersectionObserver, но с data-stagger-index. Задержка = index × 0.08s через transition-delay. | Medium |
| Card hover (translateY + тень + цвет границы) | CSS transitions | Чистый CSS: transition на transform, box-shadow, border-color. | Low |
| Button hover (translateY + lighten + тень) | CSS transitions | Чистый CSS: transition на transform, background-color, box-shadow. | Low |
| Header show/hide по скроллу | Кастомный hook `useScrollDirection` | Отслеживание направления скролла, применение transform: translateY(-100%) / translateY(0). | Low |
| Header shadow on scroll | Кастомный hook `useScrollDirection` | При scroll > 50px добавляется box-shadow класс. | Low |
| Scroll indicator bounce | CSS @keyframes | Бесконечная анимация translateY(0 → 8px → 0), 2s. | Low |
| Promo code badge pulse | CSS @keyframes | Бесконечная анимация opacity границы 0.4 → 0.8, 2s. | Low |
| WhatsApp icon pulse (в секции контакта) | CSS @keyframes | Бесконечная анимация scale(1 → 1.05 → 1), 3s. | Low |
| Section divider line-draw | Кастомный hook `useScrollReveal` | При видимости секции: width 0% → 100%, transition 0.6s. | Low |
| Mobile menu open/close | CSS transition | transform: translateX(100%) → translateX(0), 0.3s ease. | Low |

---

## Архитектурные решения

### Триада состояния: язык + тема + навигация

Три независимых механизма управления состоянием, каждый — свой контекст. Нет причин объединять их в единый store (Zustand/Redux), поскольку нет перекрёстных зависимостей между ними.

- **Язык** — React Context `LanguageProvider` со значением `ky | ru | en`, инициализируется из `localStorage`, fallback — `ky` (кыргызский основной). Все текстовые строки хранятся в плоском объекте-справочнике `translations.ts` (ключ → { ky, ru, en }). Компоненты получают перевод через `useLanguage()` hook.
- **Тема** — `data-theme` атрибут на `<html>`, переключается напрямую через `document.documentElement.setAttribute`. Значение сохраняется в `localStorage`. CSS custom properties определены в `:root[data-theme="light"]` и `:root[data-theme="dark"]` в `index.css`. Переключение мгновенное, transition на `background-color` и `color`.
- **Навигация** — якорные ссылки (`#hero`, `#categories` и т.д.) с `scroll-behavior: smooth`. Активная секция определяется через `useActiveSection` (IntersectionObserver на каждой секции с threshold 0.3). Scroll offset 80px для компенсации фиксированного Header.

### Header: скрытие / появление / shadow

Три состояния Header управляются одним хуком `useScrollDirection`:
- `scrollDirection: 'up' | 'down'` — определяет show/hide через translateY
- `scrollY > 50` — добавляет тень
Реализация: хранит предыдущее значение `window.scrollY`, сравнивает с текущим в слушателе scroll (debounce не нужен — проверка направления лёгкая). Состояние активной секции — отдельный `useActiveSection`, не смешивается со скролл-направлением.

### Scroll-triggered анимации: единый подход

Все анимации появления (fade-in, slide-up, stagger, scale-in, line-draw) реализованы через один кастомный хук `useScrollReveal`, который оборачивает IntersectionObserver. Поведение настраивается через data-атрибуты на элементах:
- `data-reveal` — базовый fade-in + slide-up
- `data-reveal-stagger="N"` — stagger-задержка N × 0.08s
- `data-reveal-scale` — scale(0.95) → scale(1)
Это позволяет избежать дублирования IntersectionObserver-логики в каждой секции и даёт декларативный API для анимаций.

### Mobile-first responsive

Сетки секций реализованы через CSS Grid с `grid-template-columns`, меняющимся по breakpoints:
- Категории: 2 / 3 / 4 колонки
- Преимущества: 1 / 2 / 3 колонки
- Отзывы: 1 / 2 / 3 колонки (на мобильном — горизонтальный scroll с `scroll-snap-type: x mandatory`)
- Акции: 1 / 1 / 2 колонки
- Footer: 1 / 2 / 4 колонки
- Локация: 1 / 1 / 2 колонки (55% / 45%)

Переключение языка и темы — одинаковый UI на всех breakpoints, только позиция в Header меняется (LanguageSwitcher и ThemeToggle видны всегда; на мобильном — внутри гамбургер-меню).

### Assets

Видео hero и изображения размещаются в `public/assets/`. Видео hero — `preload="auto"`, форматы MP4 + WebM (fallback). Изображения — WebP с fallback на JPEG через `<picture>`. QR-код (`qr-whatsapp`) предоставляется пользователем; плейсхолдер — SVG-заглушка с текстом "QR Code".
