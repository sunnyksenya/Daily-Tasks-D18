var a;
function getPicture(){
  var random;
  random = Math.floor((Math.random() * 10)/2);
  // console.log(random);
  if (random == 0) {
    a = "honda";
    document.getElementById('f1').src = 'http://cdn.fishki.net/upload/post/201510/02/1683472/4_honda.png';
  }
  if (random == 1) {
    a = "lexus";
    document.getElementById('f1').src = 'http://cdn.fishki.net/upload/post/201510/02/1683472/1_lexus.jpg';
  }
  if (random == 2) {
    a = "suzuki";
    document.getElementById('f1').src = 'http://cdn.fishki.net/upload/post/201510/02/1683472/1_suzuki.jpg';
  }
  if (random == 3) {
    a = "subaru";
    document.getElementById('f1').src = 'http://cdn.fishki.net/upload/post/201510/02/1683472/1_subaru.jpg';
  }
  if (random == 4) {
    a = "mitsubishi";
    document.getElementById('f1').src = 'https://pbs.twimg.com/media/BfWiRj1CMAAFnW7.jpg';
  }
  return a;
}
a = getPicture();
// console.log(a);

document.getElementById('button').addEventListener('click', function fun5(event) {
  var p = document.getElementById('input').value;
  var p1 = p.toLowerCase()
   console.log(a, p, p1);
  if (p1==a) {
    alert("Всё получилось!");
    // console.log("true");
  } else {
    alert("Попробуйте ещё раз!");
    // console.log("false");
  }
});
document.getElementById('change').addEventListener('click', function fun(event) {
  getPicture();
});
