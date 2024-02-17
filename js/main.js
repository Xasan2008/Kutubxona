const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

console.log(img);

let idx = 0;

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * 471}px)`;

}

rightBtn.addEventListener('click', function change() {
  idx++;
  resetInterval()
  changeImage()
});
leftBtn.addEventListener('click', function change() {
  idx--;
  resetInterval()
  changeImage()
});

let interval = setInterval(run, 8000);

function run() {
  idx++;

  changeImage();
}

function resetInterval() {
  clearInterval(interval);

  interval = setInterval(run, 8000);
}




const texts = document.getElementById('texts');
const leftBtn1 = document.getElementById('left');
const rightBtn1 = document.getElementById('right');

const text = document.querySelectorAll('#texts #intro__div-text');
console.log('')

console.log(text);

let idx1 = 0;

function changeImage1() {
  if (idx1 > text.length - 1) {
    idx1 = 0;
  } else if (idx < 0) {
    idx1 = text.length - 1;
  }
  texts.style.transform = `translateX(${-idx1 * 528}px)`;

}

rightBtn1.addEventListener('click', function change1() {
  idx1++;
  resetInterval1()
  changeImage1()
});
leftBtn1.addEventListener('click', function change1() {
  idx1--;
  resetInterval()
  changeImage1()
});

let interval1 = setInterval(run1, 8000);

function run1() {
  idx1++;

  changeImage1();
}

function resetInterval1() {
  clearInterval(interval1);

  interval1 = setInterval(run1, 8000);
}




// Menu

const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".header__nav");

function handleClick (){
if(nav.classList.contains("close")){
  nav.classList.remove("close");
  nav.classList.add("open")
}else{
    nav.classList.remove("open");
    nav.classList.add("close");
}

if(menu.classList.contains("fa-bars")){
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-xmark")
  }else{
      menu.classList.remove("fa-xmark");
      menu.classList.add("fa-bars");
  }

}
menu.addEventListener("click", handleClick);