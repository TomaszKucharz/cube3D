const brum = document.querySelector(`.cube`);
const expolde = document.querySelector(`.explode`);
// const color = document.querySelectorAll(`span`);

explodeCube = () => {
  if (
    brum.classList.contains(`explode`) ||
    brum.classList.contains(`explodeY`)
  ) {
    console.log("zawiera");
    brum.classList.remove(`explode`, `explodeY`);
  } else {
    console.log(`empty`);
    brum.classList.add("explode", "explodeY");

    setTimeout(5150);
  }
};

brum.addEventListener(`click`, explodeCube);
