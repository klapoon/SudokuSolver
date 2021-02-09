let sudoku_grid = document.getElementById("sudoku-grid");

for (let i = 1; i < 82; i++) {
    // Add input fields into sudoku game
    sudoku_grid.innerHTML += '<div class="sudoku-element" id="sudoku-element-' + i + '"><input type="text" maxlength="1" minlength="1"></div>'
    // Add right border to sudoku game
    if (i % 9 === 0) {
        document.getElementById('sudoku-element-' + i).style.borderRight = '2px solid';
    }
    // Add bottom border to sudoku game
    if (i > 72) {
        document.getElementById('sudoku-element-' + i).style.borderBottom = '2px solid';
    }
    // Separate game into 9 boxes (thick bottom line)
    if ((18 < i && i <= 27) || (45 < i && i <= 54)) {
        document.getElementById('sudoku-element-' + i).style.borderBottom = 'solid';
    }
}