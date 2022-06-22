const brum = document.querySelector(`.cube`);
const expolde = document.querySelector(`.explode`);
// const color = document.querySelectorAll(`span`);

const clear = function () {
  brum.classList.remove(`explode`, `explodeY`);
};

explodeCube = () => {
  brum.classList.toggle("explode");
  brum.classList.toggle("explodeY");
  setTimeout(clear, 5150);
};

brum.addEventListener(`click`, explodeCube);
// brum.addEventListener(`mouseenter`, changeColor);
