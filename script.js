const board = document.querySelector(".board__container");
const cellsContainer = document.querySelector(".flex__container");
const cell = document.querySelector("[class^='cell']");
const newGridButton = document.querySelector("#new__grid__button");
const rgbButton = document.querySelector("#rgb__mode__button");
const solidButton = document.querySelector("#solid__mode__button");
const BOARD_WIDTH = 600;

let size = 16;
let height = BOARD_WIDTH / size;
let colorMode = true;

function createGrid() {
  for (let i = 1; i <= size * size; i++) {
    let cell = document.createElement("div");
    cell.style.height = height + "px";
    cell.style.width = height + "px";
    cell.classList.add(`cell-${i}`);
    cellsContainer.appendChild(cell);
  }
}
createGrid();

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function setBackgroundColor(currentCell, color) {
  if (currentCell.style.backgroundColor === board.style.backgroundColor) {
    currentCell.style.backgroundColor = color;
    currentCell.style.opacity = 0.1;
    hasColor = true;
  } else if (+currentCell.style.opacity < 1) {
    currentCell.style.opacity = +currentCell.style.opacity + 0.1;
  }
  console.log(currentCell.style.backgroundColor);
}

board.addEventListener("mouseover", (e) => {
  let currentCell = e.target;
  if (!currentCell.className.includes("cell")) return;

  switch (colorMode) {
    case true: //.......RGB
      setBackgroundColor(currentCell, getRandomColor());
      break;
    case false: //....solid
      setBackgroundColor(currentCell, "rgb(0,0,0)");
      break;
  }
});

newGridButton.addEventListener("click", () => {
  let enteredNumber = prompt(
    "enter the number of squares per side, les than 100"
  );
  if (enteredNumber <= 100 && enteredNumber > 0) {
    size = enteredNumber;
    height = BOARD_WIDTH / size;
    cellsContainer.replaceChildren();
    createGrid();
  } else {
    alert("not a valid number");
  }
});

rgbButton.addEventListener("click", () => {
  colorMode = true;
  console.log(colorMode);
});

solidButton.addEventListener("click", () => {
  colorMode = false;
  console.log(colorMode);
});
