const cube = document.querySelector(`.cube`);
const expolde = document.querySelector(`.explode`);

explodeCube = () => {
  if (
    cube.classList.contains(`explode`) ||
    cube.classList.contains(`explodeY`)
  ) {
    cube.classList.remove(`explode`, `explodeY`);
  } else {
    cube.classList.add("explode", "explodeY");
    setTimeout(5150);
  }
};
cube.addEventListener(`click`, explodeCube);
