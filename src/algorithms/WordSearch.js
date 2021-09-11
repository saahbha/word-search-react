import BoyerMooreFind from "./BoyerMoore";

function find(puzzleGrid, target) {
    //initialize animation frames
    let colors = Array(1);
    colors[0] = Array(puzzleGrid.length);
    for (let row = 0; row < colors[0].length; row++) {
        colors[0][row] = Array(puzzleGrid[row].length);
        for (let col = 0; col < puzzleGrid[row].length; col++) {
            colors[0][row][col] = '';
        }
    }

    let dim = puzzleGrid[0].length;
    //generate strings for each basic direction
    let vertical = getVertical(puzzleGrid);
    let horizontal = getRows(puzzleGrid);
    let aDiagonal = getAscendingDiagonals(puzzleGrid);
    let dDiagonal = getDescendingDiagonals(puzzleGrid);

    //make sets of arrays for reverse order
    let rvertical = new Array(vertical.length);
    let rhorizontal = new Array(horizontal.length);
    let raDiagonal = new Array(aDiagonal.length);
    let rdDiagonal = new Array(dDiagonal.length);
    for (let i = 0; i < vertical.length; i++) {
        rvertical[i] = reverseString(vertical[i]);
        rhorizontal[i] = reverseString(horizontal[i]);
    }
    for (let i = 0; i < aDiagonal.length; i++) {
        raDiagonal[i] = reverseString(aDiagonal[i]);
        rdDiagonal[i] = reverseString(dDiagonal[i]);
    }

    //put these in directions
    let directions = new Array(8);
    directions[0] = vertical;
    directions[1] = dDiagonal;
    directions[2] = horizontal;
    directions[3] = aDiagonal;
    directions[4] = rvertical;
    directions[5] = rdDiagonal;
    directions[6] = rhorizontal;
    directions[7] = raDiagonal;

    //Search using BoyerMoore
    let dir = 0;
    let index = 0;
    let x = 0;
    search:
    for (dir = 0; dir <= directions.length; dir++) {
        if (dir == 8) {
            dir = -1;
            break search;
        }
        let direction = directions[dir];
        for (x = 0; x < direction.length; x++) {
            //string, word to find, color grid, the direction, the string number in this direction, the dimension of the grid
            let result = BoyerMooreFind(direction[x], target, colors, dir, x, directions, dim);
            index = result[0];
            colors = result[1];
            if (index != -1) break search;
        }
    }

    return colors;
}


function reverseString(string) {
    return string.split("").reverse().join("");
}

function getVertical(puzzleGrid) {
    let dim = puzzleGrid[0].length;
    let columns = new Array(dim);
    //Get Column Strings from the puzzleGrid
    for (let col = 0; col < dim; col++) {
        columns[col] = "";
        for (let row = 0; row < dim; row++) {
            columns[col] += puzzleGrid[row][col];
        }
    }
    return columns;
}

function getRows(puzzleGrid) {
    let dim = puzzleGrid[0].length;
    let rows = new Array(dim);
    //Get Row Strings from the puzzleGrid
    for (let row = 0; row < dim; row++) {
        rows[row] = "";
        for (let col = 0; col < dim; col++) {
            rows[row] += puzzleGrid[row][col];
        }
    }
    return rows;
}

function getAscendingDiagonals(puzzleGrid) {
    let dim = puzzleGrid[0].length;
    let ascendingDiagonal = new Array(dim*2 - 1);
    for (let startRow = 0; startRow < dim; startRow++) {
        ascendingDiagonal[startRow] = "";
        for (let col = 0; col <= startRow; col++) {
            ascendingDiagonal[startRow] += puzzleGrid[startRow - col][col];
        }
    }
    for (let startCol = 1; startCol < dim; startCol++) {
        ascendingDiagonal[dim + startCol - 1] = "";
        for (let row = dim - 1; row >= startCol; row--) {
            ascendingDiagonal[dim - 1 + startCol] += puzzleGrid[row][startCol + (dim - 1) - row];
        }
    }

    return ascendingDiagonal;
}

function getDescendingDiagonals(puzzleGrid) {
    let dim = puzzleGrid[0].length;
    let descendingDiagonal = new Array(dim*2 - 1);
    for (let startCol = dim - 1; startCol >= 0; startCol--) {
        let arrIndex = dim - 1 - startCol;
        descendingDiagonal[arrIndex] = "";
        for (let row = 0; row <= arrIndex; row++) {
            descendingDiagonal[arrIndex] += puzzleGrid[row][startCol + row];
        }
    }
    for (let startRow = 1; startRow < dim; startRow++) {
        let arrIndex = dim - 1 + startRow;
        descendingDiagonal[arrIndex] = "";
        for (let col = 0; col <= dim - 1 - startRow; col++) {
            descendingDiagonal[arrIndex] += puzzleGrid[startRow + col][col];
        }
    }

    return descendingDiagonal;
}

function stringCoordsToGridCoords(dir, x, find, directions, dim) {
    let row = -1;
    let col = -1;

    //Translate (x,find) to (row,col)
    if (dir == 0) {
        row = find;
        col = x;
    }
    else if (dir == 1) {
        if (x < dim) {
            row = find;
            col = dim - 1 - x + find;
        } else {
            row = x - dim + 1 + find;
            col = find;
        }
    }
    else if (dir == 2) {
        row = x;
        col = find;
    }
    else if (dir == 3) {
        if (x < dim) {
            row = x - find;
            col = find;
        } else {
            row = dim - 1 - find;
            col = x - dim + 1 + find;
        }
    }
    else if (dir == 4) {
        row = dim - 1 - find;
        col = x;
    }
    else if (dir == 5) {
        find = directions[dir][x].length - find - 1;
        if (x < dim) {
            row = find;
            col = dim - 1 - x + find;
        } else {
            row = x - dim + 1 + find;
            col = find;
        }
    }
    else if (dir == 6) {
        row = x;
        col = dim - 1 - find;
    }
    else if (dir == 7) {
        find = directions[dir][x].length - find - 1;
        if (x < dim) {
            row = x - find;
            col = find;
        } else {
            row = dim - 1 - find;
            col = x - dim + 1 + find;
        }
    }
    return [row, col];
}

export default {find, stringCoordsToGridCoords};