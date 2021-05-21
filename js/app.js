const nav = document.querySelector("nav");
const cageMenu = document.querySelector(".cageMenu");
const hamburger = document.querySelector(".hamburger");
const smallNav = document.querySelector("._smallNav");
const spanOne = document.querySelector(".span1");
const spanTwo = document.querySelector(".span2");
const menuH = document.querySelector(".menuH");

cageMenu.addEventListener("click", () => {
  smallNav.classList.toggle("open");

  hamburger.classList.toggle("position");

  menuH.classList.toggle("animMT");
    
  spanOne.classList.toggle("one");
  spanTwo.classList.toggle("two");
    
  nav.classList.toggle("fixed");

});


const sms = document.querySelector(".message");
const smsForm = document.querySelector(".messageForm");

sms.addEventListener("click", () => {

  smsForm.classList.toggle("open"); 

});



const sOne = document.querySelector(".span_1");
const aOne = document.querySelector(".article_1");

sOne.addEventListener("click", () => {

  sOne.classList.toggle("turn"); 
  aOne.classList.toggle("open"); 

});

const sTwo = document.querySelector(".span_2");
const aTwo = document.querySelector(".article_2");

sTwo.addEventListener("click", () => {

  sTwo.classList.toggle("turn"); 
  aTwo.classList.toggle("open"); 

});

const sThree = document.querySelector(".span_3");
const aThree = document.querySelector(".article_3");

sThree.addEventListener("click", () => {

  sThree.classList.toggle("turn"); 
  aThree.classList.toggle("open"); 

});

const cookies = document.querySelector(".cookies");
const got = document.querySelector(".got_it");

got.addEventListener("click", () => {

  cookies.classList.add("close");

});