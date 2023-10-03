// Получаем ссылки на элементы DOM
const image = document.getElementById('image');
const changeImageBtn = document.getElementById('changeImageBtn');

// Создаем массив с путями к изображениям
const imagePaths = [
  'images/image1.png',
  'images/image2.png',
  'images/image3.png',
];

let currentImageIndex = 0; // Индекс текущего изображения

// Функция для смены изображения
function changeImage() {
  // Увеличиваем индекс изображения на 1 (переходим к следующему изображению)
  currentImageIndex++;

  // Если индекс становится больше, чем количество изображений, возвращаемся к первому изображению
  if (currentImageIndex >= imagePaths.length) {
    currentImageIndex = 0;
  }

  // Устанавливаем новый путь к изображению
  image.src = imagePaths[currentImageIndex];
}

// Добавляем обработчик клика на кнопку
changeImageBtn.addEventListener('click', changeImage);
