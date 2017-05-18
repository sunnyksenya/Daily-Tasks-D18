// Задание «ЖУК»
// Задание 1
// 	•	Создайте таймер, при срабатывании которого “жук” осуществляет движение в случайном направлении. Направлений движения четыре (север – уменьшается вертикальная координата, юг – увеличивается вертикальная координата, восток – увеличивается горизонтальная координата и запад – уменьшается горизонтальная координата). Направление выбирается генератором случайных чисел. После выбора направления осуществляетя движение в выбраном направлении на величину 10px.
// 	•	Учтите краевые условия. «Жук» не может выходить за пределы поля.

// var timer;
// var xtop = 0;
// var xbottom = 0;
// var xleft = 0;
// function fStart() {
//   // var random;
//   var random = Math.floor((Math.random() * 10)/2);
//   console.log(random,xtop,xbottom);
//
//
//   if (random == 1) {
//     document.querySelector('#bug').style.top = xtop +'px';
//     xtop = xtop+50;
//   }
//   if (random == 2) {
//     document.querySelector('#bug').style.left = xleft +'px';
//     xleft = xleft+10;
//   }
//   if (random == 3) {
//     document.querySelector('#bug').style.bottom = xbottom +'px';
//     xbottom = xbottom+50;
//   }
//   if (random == 4) {
//     document.querySelector('#bug').style.top = xtop +'px';
//     xtop = xtop+10;
//   }
//   timer = setTimeout(fStart, 3000);
// }
// fStart();

var leftX = 140;
var topY = 140;
var d;
var bug = document.querySelector('#bug');
var timer;

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    // console.log(rand);
    return Math.abs(rand);
 }
function calculate () {
	// var d = randomInteger(0,3);
	if (d == 0) topY = topY - 10;
	else if (d == 1 ) leftX = leftX + 10;
	else if (d == 2 ) topY = topY + 10;
	else if (d == 3 ) leftX = leftX - 10;
	if (leftX<=0 || leftX>=290 || topY<=0 || topY>=290){
		clearInterval(timer);
		move2();
		//return;
	}
}
function move(){

	calculate();
	bug.style.top = topY +'px';
	bug.style.left = leftX +'px';
}
function move2() {
	var n = randomInteger(1,8);//колво шагов
	d = randomInteger(0,3); // направление
  console.log(n,d);
	timer = setInterval(move, 50);
}
move2();

// Задание 2.
// 	•	Добавьте возможность останавливать таймер (кнопка).
// 	•	Добавьте возможность управления «жуком» с помощью стрелок клавиатуры.
