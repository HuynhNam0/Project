const courses = ["Developers", "designers", "founders"];
const handles = document.querySelectorAll(".handle__left--button__top");
const numbers = document.querySelectorAll(".number");
const typing = document.getElementById("typing");
const slides = document.querySelectorAll(".slider__images--item");
const slider = document.querySelector(".slider");
const imagesContainer = document.querySelector(".slider__images--items");
console.log(slides);
var counter = 0;
var maxNumber = 100;

// Typing
const addTyping = (arr) => {
  const typingPromises = arr.map((course, index) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        typing.textContent = course;
        typing.style.color = "#42ba96";
        if (index <= arr.length - 1) {
          setTimeout(() => {
            resolve();
          }, 1000);
        } else {
          setTimeout(() => {
            resetText();
            resolve();
          }, 1000);
        }
      }, index * 3000);
    });
  });
  Promise.all(typingPromises).then(() => {
    console.log("Typing effect complete");
    setTimeout(() => {
      resetText();
      addTyping(courses);
    }, 2000);
  });
};

const resetText = () => {
  typing.textContent = "";
  typing.style.color = "";
};
addTyping(courses);

//slide show
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goNext = () => {
  counter = (counter + 1) % 2;
  slideImage();
};

const goPrev = () => {
  counter = (counter - 1 + 2) % 2;
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
//
function addNumber() {
  numbers.forEach((number) => {
    let startNumber = 29;
    let endNumber = parseInt(number.getAttribute("data-val"));
    setTimeout(() => {});
    let counter = setInterval(function () {
      startNumber += 1;
      number.textContent = startNumber;
      if (startNumber == endNumber) {
        clearInterval(counter);
      }
    }, 50);
  });
}

function addHandle() {
  handles.forEach((handle) => {
    let startHandle = 0;
    let endHandle = parseInt(handle.getAttribute("data-val"));
    setTimeout(() => {});
    let counter = setInterval(function () {
      startHandle += 20;
      handle.textContent = startHandle;
      if (startHandle == endHandle) {
        clearInterval(counter);
      }
    }, 100);
  });
}
addHandle();
const lightDark = () => {
  addNumber();
};

function $(id) {
  return document.getElementById(id);
}
window.onload = function () {
  const animation = $("light-dark");
  const btn1 = $("btn-1");
  const btn2 = $("btn-2");
  animation.onclick = lightDark;
  btn1.onclick = goPrev;
  btn2.onclick = goNext;
};
