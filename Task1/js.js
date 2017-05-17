// Задание 1. Выведите координаты мыши относительно блока в момент движения курсора мыши внутри блока. Координаты выводить под блоком.
var test = document.querySelector('.test');
// console.log(test);
test.addEventListener('mousemove', f1);
function f1(event) {
  // console.log(event.offsetX);
  // console.log(event.offsetY);
  document.querySelector('.out').innerHTML = event.offsetX + ', ' + event.offsetY;
}
// Задание 2. Создайте блок div, в качестве изображения фона установите ему изображение закрытой папки. Добавьте событие, которое выполняется при двойном клике на блоке и заменяет фон блока на изображение открытой папки.
document.querySelector('.folder').addEventListener('dblclick', f2);
function f2(event) {
  document.querySelector('.folder').style.backgroundImage = 'url(https://cdn2.iconfinder.com/data/icons/snipicons/5000/folder-open-128.png)';
}
// Задание 3. Добавьте в документ 300-400 блоков div квадратной формы с размерами сторон 30px, и цветом фона. Добавление элементов выполните с помощью цикла.  Добавьте событие при наведении мыши, которое будет скруглять данные блоки с помощью border-radius до круга.  (Для замедления эффекта скругления в CSS можно добавить transition).
function addHundred() {
  for (var i=0; i<95; i++) {
    var u = document.createElement('div');
    u.className = 'hundred';
    document.querySelector('.hundred_master').appendChild(u);
    u.addEventListener('mouseover', f3);

  }
}
addHundred();

function f3(event) {
  console.log(event);
  event.target.style.borderRadius = '50%';
}

// Задание 4. Создайте div размерами ширина – 100%, высота 250px. Ниже добавьте 4-5 изображений с одинаковыми классами, разного размера. Добавьте событие, которое будет при клике на изображении устанавливать его фоном блока div со свойством background-size: contain.
document.querySelector('.four_images').addEventListener('click', function(event){
  // console.log(document.querySelector('.images').src);
  document.querySelector('.four_master').style.backgroundImage = 'url('+event.target.src+')';
});
// Задание 5. Создайте блок размерами 50x50px. Добавьте событие клик, так, что при каждом клике на блоке он отодвигается на 100px вниз от предыдущего положения.
var z = 0;
document.querySelector('.five').addEventListener('click', function(event) {
  z = z + 100;
  event.target.style.marginTop = z + 'px';
})
