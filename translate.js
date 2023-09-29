const i18nObj = {
    'en': {
        'shop': 'shop',
        'style-quiz': 'style-quiz',
        'about-us': 'about-us',
        'stories': 'stories'
    },
    'ru': {
        'shop': 'магазин',
        'style-quiz': 'викторина',
        'about-us': 'о нас',
        'stories': 'история'
    }
};

// Функция для установки перевода на странице
function getTranslate(language) {
    // Найти все элементы с атрибутом data-i18n
    const elements = document.querySelectorAll('[data-i18n]');

    // Перебрать коллекцию элементов
    elements.forEach(function (element) {
        // Получить ключ перевода из атрибута dataset.i18n
        const translationKey = element.dataset.i18n;

        // Получить текстовое значение для ключа на указанном языке
        const translatedText = i18nObj[language][translationKey];

        // Установить текстовое значение элемента
        element.textContent = translatedText;
    });
}

// Обработчик события клика для кнопки "Перевести"
const translateButton = document.getElementById('translateButton');

translateButton.addEventListener('click', function () {
    // Вызов функции для перевода на нужный язык (например, 'en' или 'ru')
    getTranslate('ru'); // Замените 'ru' на нужный вам язык
});
