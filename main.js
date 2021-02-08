let sudoku_grid = document.getElementById("sudoku-grid");

for (let i = 0; i < 81; i++) {
    sudoku_grid.innerHTML += '<div><input class="sudoku-element" type="text" maxlength="1" minlength="1"></div>'
}