export type Lang = 'ky' | 'ru' | 'en';

export const translations = {
  // Header
  logo: { ky: 'Eldik Market', ru: 'Eldik Market', en: 'Eldik Market' },
  navHome: { ky: 'Башкы бет', ru: 'Главная', en: 'Home' },
  navCategories: { ky: 'Категориялар', ru: 'Категории', en: 'Categories' },
  navPromotions: { ky: 'Акциялар', ru: 'Акции', en: 'Promotions' },
  navAbout: { ky: 'Биз жөнүндө', ru: 'О нас', en: 'About' },
  navContact: { ky: 'Байланыш', ru: 'Контакты', en: 'Contact' },

  // Hero
  heroSlogan: {
    ky: 'Жаңы жана арзан продуктылар — ар бир күн!',
    ru: 'Свежие продукты по доступным ценам — каждый день!',
    en: 'Fresh products at affordable prices — every day!'
  },
  heroCta: {
    ky: 'Менеджерге жазуу (WhatsApp)',
    ru: 'Написать менеджеру (WhatsApp)',
    en: 'Contact Manager (WhatsApp)'
  },

  // Categories
  catTitle: { ky: 'Биздин категориялар', ru: 'Наши категории', en: 'Our Categories' },
  catSubtitle: {
    ky: '10000+ товарлар — ар бир үй үчүн',
    ru: 'Более 10 000 товаров — для каждого дома',
    en: '10,000+ products — for every home'
  },
  categories: [
    { icon: 'ShoppingBasket', ky: 'Бакалея', ru: 'Бакалея', en: 'Groceries' },
    { icon: 'Milk', ky: 'Сүт азыктары', ru: 'Молочные продукты', en: 'Dairy Products' },
    { icon: 'Croissant', ky: 'Нан азыктары', ru: 'Выпечка', en: 'Bakery' },
    { icon: 'Apple', ky: 'Жаңы жемиштер', ru: 'Свежие фрукты', en: 'Fresh Fruits' },
    { icon: 'Carrot', ky: 'Жаңы жашылчалар', ru: 'Свежие овощи', en: 'Fresh Vegetables' },
    { icon: 'Wine', ky: 'Ичимдиктер', ru: 'Напитки', en: 'Beverages' },
    { icon: 'Dumbbell', ky: 'Спорттуу ичимдиктер', ru: 'Спортивные напитки', en: 'Sports Drinks' },
    { icon: 'Cookie', ky: 'Снектер жана таттуулар', ru: 'Снеки и сладости', en: 'Snacks & Sweets' },
    { icon: 'Sparkles', ky: 'Тазалоо каражаттары', ru: 'Товары для уборки', en: 'Household Cleaning' },
    { icon: 'Heart', ky: 'Жеке гигиена', ru: 'Персональная гигиена', en: 'Personal Care' },
    { icon: 'Baby', ky: 'Бала буюмдары', ru: 'Детские товары', en: 'Baby Products' },
    { icon: 'Snowflake', ky: 'Туздуктар', ru: 'Замороженные продукты', en: 'Frozen Foods' },
  ],

  // Promotions
  promoTitle: {
    ky: 'Арзандатуулар жана акциялар',
    ru: 'Скидки и акции',
    en: 'Discounts & Promotions'
  },
  promoSubtitle: {
    ky: 'Акциялардан пайдаланып, акчаңызды үнөмдөңүз!',
    ru: 'Экономьте с нашими специальными предложениями!',
    en: 'Save money with our special offers!'
  },
  promo1Title: { ky: 'Промо-код: SPORT', ru: 'Промо-код: SPORT', en: 'Promo Code: SPORT' },
  promo1Desc: {
    ky: 'SPORT промо-кодун колдонуп, бардык товарлардан 3% арзандатуу алыңыз!',
    ru: 'Используйте промо-код «SPORT» и получите скидку 3% на все товары!',
    en: 'Use promo code "SPORT" and get 3% OFF on all products!'
  },
  promo1Cta: { ky: 'WhatsApp аркылуу жазуу', ru: 'Написать в WhatsApp', en: 'Chat on WhatsApp' },
  promo2Title: {
    ky: '2GIS\'те пикир калтырып, 5% арзандатуу алыңыз',
    ru: 'Оставьте отзыв на 2GIS и получите 5% скидки',
    en: 'Leave a review on 2GIS and get 5% OFF'
  },
  promo2Desc: {
    ky: 'Eldik Market жөнүндө 2GIS\'те пикир калтырып, кийинки сатып алууда 5% арзандатуу алыңыз!',
    ru: 'Оставьте отзыв о Eldik Market на 2GIS и получите скидку 5% на следующую покупку!',
    en: 'Leave a review about Eldik Market on 2GIS and receive a 5% discount on your next purchase!'
  },
  promo2Cta: { ky: '2GIS\'те пикир калтыруу', ru: 'Оставить отзыв на 2GIS', en: 'Leave Review on 2GIS' },

  // Why Choose Us
  whyTitle: { ky: 'Эмне үчүн бизди тандашат?', ru: 'Почему выбирают нас?', en: 'Why Choose Us?' },
  whySubtitle: {
    ky: 'Биз сиздин ишенимдүү дүкөңүңүзбүз',
    ru: 'Мы — ваш надёжный магазин',
    en: 'We are your trusted neighborhood store'
  },
  whyItems: [
    {
      icon: 'CheckCircle',
      ky: { title: 'Ар дайым жаңы', desc: 'Ар бир күнү жаңы товарлар келет' },
      ru: { title: 'Всегда свежие', desc: 'Каждый день свежие поставки' },
      en: { title: 'Always Fresh', desc: 'Fresh deliveries every single day' }
    },
    {
      icon: 'TrendingDown',
      ky: { title: 'Арзан баалар', desc: 'Баалар ар дайым рыноктон төмөн' },
      ru: { title: 'Доступные цены', desc: 'Цены всегда ниже рынка' },
      en: { title: 'Affordable Prices', desc: 'Prices always below market' }
    },
    {
      icon: 'ShoppingBasket',
      ky: { title: 'Кенири тандоо', desc: '10000+ ар төрлүү товарлар' },
      ru: { title: 'Широкий ассортимент', desc: 'Более 10 000 различных товаров' },
      en: { title: 'Wide Assortment', desc: '10,000+ diverse products' }
    },
    {
      icon: 'Heart',
      ky: { title: 'Мээримдүү кызмат', desc: 'Жылуу жана ыңгайлуу тейлөө' },
      ru: { title: 'Дружелюбный сервис', desc: 'Тёплое и удобное обслуживание' },
      en: { title: 'Friendly Service', desc: 'Warm and welcoming service' }
    },
    {
      icon: 'MapPin',
      ky: { title: 'Ыңгайлуу жайгашуу', desc: 'Бишкектин борборунда' },
      ru: { title: 'Удобное расположение', desc: 'В центре Бишкека' },
      en: { title: 'Convenient Location', desc: 'In the heart of Bishkek' }
    },
    {
      icon: 'Percent',
      ky: { title: 'Атайын акциялар', desc: 'Ар дайым жаңы арзандатуулар' },
      ru: { title: 'Специальные акции', desc: 'Всегда новые скидки' },
      en: { title: 'Special Promotions', desc: 'Always new deals' }
    },
  ],

  // Reviews
  reviewTitle: {
    ky: 'Кардарларыбыздын пикирлери',
    ru: 'Отзывы наших покупателей',
    en: 'What Our Customers Say'
  },
  reviewSubtitle: {
    ky: 'Ишенимдүүлүк — биздин негизибиз',
    ru: 'Доверие — наша основа',
    en: 'Trust is our foundation'
  },
  reviews: [
    {
      name: 'Айгүл К.',
      rating: 5,
      ky: 'Арзан баалар жана жаңы продуктылар! Ар дайым бул жерден сатып алам.',
      ru: 'Отличные цены и свежие продукты! Всегда покупаю здесь.',
      en: 'Great prices and fresh products! Always shop here.',
      avatar: '/assets/avatar-1.jpg'
    },
    {
      name: 'Нурсултан М.',
      rating: 5,
      ky: 'Кызматкерлер абдан мээримдүү. Дүкөн таза жана ыңгайлуу.',
      ru: 'Очень дружелюбный персонал. Магазин чистый и удобный.',
      en: 'Very friendly staff. The store is clean and convenient.',
      avatar: '/assets/avatar-2.jpg'
    },
    {
      name: 'Жазгүл Т.',
      rating: 4,
      ky: 'Товарлардын тандоосу кенири. Акциялар абдан жакшы!',
      ru: 'Большой выбор товаров. Акции просто супер!',
      en: 'Wide selection of products. The promotions are amazing!',
      avatar: '/assets/avatar-3.jpg'
    },
    {
      name: 'Бектур А.',
      rating: 5,
      ky: 'Спорттуу ичимдиктердин тандоосу эң мыкты!',
      ru: 'Лучший выбор спортивных напитков!',
      en: 'Best selection of sports drinks!',
      avatar: '/assets/avatar-4.jpg'
    },
    {
      name: 'Салтанат Р.',
      rating: 5,
      ky: 'Биздин үй-бүлөнүн сүйүктүү дүкөнү. Ар дайым жаңы нандар!',
      ru: 'Любимый магазин нашей семьи. Всегда свежий хлеб!',
      en: "Our family's favorite store. Always fresh bread!",
      avatar: '/assets/avatar-5.jpg'
    },
  ],

  // Location
  locTitle: { ky: 'Биз кайда жайгашканбыз', ru: 'Где мы находимся', en: 'Our Location' },
  locAddress: { ky: 'Дарек', ru: 'Адрес', en: 'Address' },
  locAddressVal: { ky: 'Жукеева-Пудовкина 43/3', ru: 'Жукеева-Пудовкина 43/3', en: 'Jukeeva-Pudovkina 43/3' },
  locHours: { ky: 'Иштоо убактысы', ru: 'Часы работы', en: 'Working Hours' },
  locHoursVal: { ky: 'Дүйшөмбү-Жекшемби: 08:00 - 24:00 (сыйыксыз)', ru: 'Пн-Вс: 08:00 - 24:00 (без перерыва)', en: 'Mon-Sun: 08:00 - 24:00 (no breaks)' },
  locContact: { ky: 'Байланыш', ru: 'Контакт', en: 'Contact' },
  locPhone: '+996 550 855 936',
  locCta: { ky: '2GIS\'те ачуу', ru: 'Открыть в 2GIS', en: 'Open in 2GIS' },

  // WhatsApp Contact
  waTitle: {
    ky: 'Баа же бар-жогу боюнча сурасаңыз болот?',
    ru: 'Нужна консультация по ценам или наличию?',
    en: 'Need product info, prices, or availability?'
  },
  waDesc: {
    ky: 'Биздин менеджерге түздөн-түз WhatsApp аркылуу жазыңыз. Тез жооп!',
    ru: 'Свяжитесь с нашим менеджером напрямую через WhatsApp. Быстрый ответ!',
    en: 'Contact our manager directly on WhatsApp. Quick response!'
  },
  waCta: { ky: 'WhatsApp\'та жазуу', ru: 'Написать в WhatsApp', en: 'Chat on WhatsApp' },

  // WhatsApp Community
  commTitle: {
    ky: 'Биздин WhatsApp коомчулугу',
    ru: 'Наше WhatsApp-сообщество',
    en: 'Our WhatsApp Community'
  },
  commSubtitle: {
    ky: 'Жаңы товарлар, акциялар жана сырткы абал жөнүндө билүү!',
    ru: 'Узнавайте о новинках, акциях и спецпредложениях первыми!',
    en: 'Be the first to know about new products, deals, and special offers!'
  },
  commDesc: {
    ky: 'QR-кодду сканерлеп, биздин WhatsApp тобубузга кошулуңуз. Жаңы товарлар жана арзандатуулар жөнүндө биринчилерден болуп билгиңиз келсе!',
    ru: 'Отсканируйте QR-код и присоединитесь к нашей группе WhatsApp. Будьте в курсе новых товаров и скидок!',
    en: 'Scan the QR code and join our WhatsApp group. Stay updated on new products and discounts!'
  },
  commCta: {
    ky: 'WhatsApp тобуна кошулуу',
    ru: 'Присоединиться к группе WhatsApp',
    en: 'Join WhatsApp Group'
  },

  // Footer
  footerTagline: {
    ky: 'Сиздин ишенимдүү дүкөнүңүз',
    ru: 'Ваш надёжный магазин',
    en: 'Your trusted store'
  },
  footerLinksTitle: {
    ky: 'Тез шилтемелер',
    ru: 'Быстрые ссылки',
    en: 'Quick Links'
  },
  footerContactTitle: {
    ky: 'Байланыш',
    ru: 'Контакты',
    en: 'Contact'
  },
  footerSocialTitle: {
    ky: 'Биз социалдык тармакта',
    ru: 'Мы в соцсетях',
    en: 'Follow Us'
  },
  footerCopyright: '© 2025 Eldik Market. Бишкек, Кыргызстан.',
} as const;

export type TranslationKeys = typeof translations;
