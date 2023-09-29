const i18nObj = {
    'en': {
        'shop': 'shop',
        'style-quiz': 'style-quiz',
        'about-us': 'about-us',
        'stories': 'stories',
        'h3-content-top-of-page': 'all collections',
        'p-content-top-of-page': 'elevate your everyday',
        'shop-now': 'shop now',
        'text-greeting': 'If your happy place is at the dinner table, we totally get that. That’s why we created products to help you find slow moments in a fast world.',
        'shop-all': 'Shop All',
        'read-stories': 'Read Stories',
        'h2-product-preview': 'Maple Board Collection',
        'text-promo-short': 'Maple Board - Short',
        'text-promo-long': 'Maple Board - Long',
        'text-promo-wide': 'Maple Board - Wide',
        'h3-content-tagline': 'the essentials',
        'p-content-tagline': 'We believe minimalism means more. More space, more time, more meaningful moments.',
        'text-examples-of-using-first': 'Our Design Story',
        'text-in-examples-of-using-first': 'We believe in thoughtful, intentional living. So we promise not to clutter your cabinets with one-off pieces you’ll rarely use. Our collection only includes items you’ll reach for every day. Because mindful living should be simple, not stressful.',
        'text-examples-of-using-second': ' Your Table Your Time',
        'text-in-examples-of-using-second': 'Our modern lives keep us in constant motion. But what keeps us moving isn’t always what moves us. Our time at the table is our pause button. Meals can become moments and moments can become memories. So grab a plate, pull up a seat, and stay a while.',
        'text-title-in-subscribe': 'Sign up to our newsletter',
        'text-in-subscribe': 'Receive special offers and first look at new products.',
        'subscribe-button': 'subscribe',
        'moments': '#KinnMoments',
        'help': 'help',
        'faq': 'FAQs + shipping',
        'contact': 'contact',
        'terms': 'terms',
        'trade': 'trade',
        'explore': 'explore',
        'shops': 'shop',
        'style': 'style quiz',
        'about': 'about us',
        'storie': 'stories',
        'email': 'Need to get in touch? Just email us at '
    },
    'ru': {
        'shop': 'магазин',
        'style-quiz': 'викторина',
        'about-us': 'о нас',
        'stories': 'история',
         'h3-content-top-of-page':'все коллекции',
        'p-content-top-of-page':'улучшите свою повседневную жизнь',
        'shop-now':'купить',
        'text-greeting': 'Если ваше счастливое место — за обеденным столом, мы это прекрасно понимаем. Вот почему мы создали продукты, которые помогут вам замедлиться в быстром мире.',
        'shop-all': 'Купить все',
        'read-stories': 'Читать истории',
        'h2-product-preview': 'Коллекция кленовых досок',
        'text-promo-short': 'Короткая кленовая доска',
        'text-promo-long': 'Длинная кленовая доска',
        'text-promo-wide': 'Широкая кленовая доска',
        'h3-content-tagline': 'Основы',
        'p-content-tagline': 'Мы считаем, что минимализм значит больше. Больше места, больше времени, больше значимых моментов.',
        'text-examples-of-using-first': 'История нашего дизайна',
        'text-in-examples-of-using-first': 'Мы верим в продуманную, целенаправленную жизнь. Поэтому мы обещаем не загромождать ваши шкафы одноразовыми предметами, которыми вы будете редко пользоваться. В нашей коллекции только те вещи, к которым вы будете обращаться каждый день. Потому что осознанная жизнь должна быть простой, а не стрессовой.',
        'text-examples-of-using-second': 'Ваш стол - ваше время',
        'text-in-examples-of-using-second': 'Современная жизнь заставляет нас постоянно двигаться. Но то, что заставляет нас двигаться, не всегда движет нами. Время, проведенное за столом, — это наша кнопка паузы. Еда может стать моментами, а моменты могут стать воспоминаниями. Так что хватай тарелку, садись и оставайся ненадолго.',
        'text-title-in-subscribe': 'Подписаться на рассылку',
        'text-in-subscribe': 'Получайте специальные предложения и первыми знакомьтесь с новинками.',
        'subscribe-button': 'подписаться',
        'moments': '#KinnМоменты',
         'help': 'помощь',
        'faq': 'ЧЗВ + доставка',
        'contact': 'контакт',
        'terms': 'условия',
        'trade': 'торговля',
        'explore': 'исследование',
        'shops': 'купить',
        'style': 'викторина',
        'about': 'о нас',
        'storie': 'история',
        'email': 'Хотите связаться? Просто напишите нам: '
    }
};

function getTranslate(language) {

    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(function (element) {

        const translationKey = element.dataset.i18n;

        const translatedText = i18nObj[language][translationKey];

        element.textContent = translatedText;
    });
}

const languageToggle = document.getElementById('languageToggle');

languageToggle.addEventListener('change', function () {
  const language = languageToggle.checked ? 'ru' : 'en';
  getTranslate(language);
});