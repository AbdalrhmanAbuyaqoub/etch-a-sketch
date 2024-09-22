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
  let currentCell = e.target.className;
  if (currentCell.includes("cell")) {
    e.target.classList.add("cell--change--color");
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
