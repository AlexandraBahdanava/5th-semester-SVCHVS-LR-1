// Создаем массив с названиями классов элементов, стили которых меняются
const elementsWithThemeStyles = [
  'body',
  'navbar',
  'slider',
  'round',
  'header',
  'background-line',
  'menu',
  'top-of-page',
  'shop-now',
  'shop-all',
  'read-stories',
  'a',
  'product-preview',
  'image-top-of-page',
  'tagline',
  'content-tagline',
  'examples-of-using-first',
  'image-examples-of-using-first',
  'examples-of-using-second',
  'image-examples-of-using-second',
  'text-examples-of-using-first',
  'text-examples-of-using-second',
  'subscribe',
  'moments',
  'footer',
  'help-buttons',
  'explore-buttons',
  'contacts'
];

const themeToggle = document.getElementById('themeToggle'); 
themeToggle.addEventListener('change', function () {

  const currentTheme = themeToggle.checked ? 'dark-theme' : 'light-theme';

  elementsWithThemeStyles.forEach(function (elementClass) {
    const elements = document.querySelectorAll(`.${elementClass}`);
    elements.forEach(function (element) {
      element.classList.toggle('dark-theme', currentTheme === 'dark-theme');
    });
  });
});
