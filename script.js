const board = document.querySelector(".board__container");
const cellsContainer = document.querySelector(".flex__container");
const cell = document.querySelector("[class^='cell']");
const newGridButton = document.querySelector("#new__grid__button");
const BOARD_WIDTH = 600;

let size = 16;
let height = BOARD_WIDTH / size;

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

board.addEventListener("mouseover", (e) => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let currentCell = e.target;
  if (currentCell.className.includes("cell")) {
    currentCell.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
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
