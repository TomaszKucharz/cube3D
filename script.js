const brum = document.querySelector(`.cube`);
const expolde = document.querySelector(`.explode`);
const color = document.querySelectorAll(`span`);

const clear = function () {
  brum.classList.remove(`explode`, `explodeY`);
};

explodeCube = () => {
  console.log(`własnie klikłem kostkem!`);
  brum.classList.toggle("explode");
  brum.classList.toggle("explodeY");
  setTimeout(clear, 5050);
};

brum.addEventListener(`click`, explodeCube);
// brum.addEventListener(`mouseenter`, changeColor);
