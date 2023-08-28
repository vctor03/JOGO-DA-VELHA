const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

function handleCellClick(event) {
  const cell = event.target;

  if (cell.textContent === "") {
    cell.textContent = currentPlayer;
    cell.setAttribute("data-cell", currentPlayer);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    checkWinner();
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      setTimeout(() => {
        alert(`${cells[a].textContent} venceu!`);
        resetBoard();
      }, 100);
    }
  }

  if ([...cells].every((cell) => cell.textContent !== "")) {
    setTimeout(() => {
      alert("Empate!");
      resetBoard();
    }, 100);
  }
}

function resetBoard() {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.setAttribute("data-cell", "");
  });
  currentPlayer = "X";
}
