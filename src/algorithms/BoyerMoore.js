import WordSearch from './WordSearch';

function lastOccurrenceFunction(string) {
    let lof = {};
	for (let i = string.length - 1; i >= 0; i--) {
        let current = string.charAt(i);
        if (lof[current] === undefined) {
            lof[current] = i.toString();
        }
    }
    return lof;
}

function BoyerMooreFind(T, P, colors, dir, x, directions, dim){
    let n = T.length;
    let m = P.length;
    if (m > n) return [-1, colors];
    let lof = lastOccurrenceFunction(P);

    let i = m - 1;
    let j = m - 1;
    //color the selection grey
    colors = selection(dir, x, i, m, directions, dim, colors);
    do {
        let t = T.charAt(i);
        let p = P.charAt(j);
        //match
        if (t == p) {
            //color the letter corisponding to 't' is green
            colors = colorLetter(dir, x, i, 'green', directions, dim, colors);

            if (j == 0) return [i, colors];
            else {
                i--;
                j--;
            }
        }
        //no match
        else {
            //color the letter corisponding to 't' is red
            colors = colorLetter(dir, x, i, 'red', directions, dim, colors);

            let l = -1;
            if (lof[t] !== undefined) {
                //color the letter corisponding to 't' is orange 
                colors = colorLetter(dir, x, i, 'orange', directions, dim, colors);
                l = parseInt(lof[t]);
            }
            i = i + m - Math.min(j, 1 + l);
            j = m - 1;

            //start over 
            colors = emptyColors(colors, dim);
            if (!(i > n - 1)) {
                //color the selection grey
                colors = selection(dir, x, i, m, directions, dim, colors);
            }
        }
    } while (!(i > n - 1));

    return [-1, colors];
}

function selection(dir, x, i, m, directions, dim, frames) {
    let newFrame = JSON.parse(JSON.stringify(frames[frames.length-1]));
    for (let index = i; index >= (i - m + 1); index--) {
        let coords = WordSearch.stringCoordsToGridCoords(dir, x, index, directions, dim);
        let row = coords[0];
        let col = coords[1];
        newFrame[row][col] = 'grey';
    }
    frames.push(newFrame);
    return frames;
}

function colorLetter(dir, x, i, color, directions, dim, frames) {
    let newFrame = JSON.parse(JSON.stringify(frames[frames.length-1]));
    let coords = WordSearch.stringCoordsToGridCoords(dir, x, i, directions, dim);
    let row = coords[0];
    let col = coords[1];
    newFrame[row][col] = color;
    frames.push(newFrame);
    return frames;
}

function emptyColors(frames, dim) {
    let newFrame = Array(dim);
    for (let row = 0; row < dim; row++) {
        newFrame[row] = Array(dim);
        for (let col = 0; col < dim; col++) {
            newFrame[row][col] = '';
        }
    }
    frames.push(newFrame);
    return frames;
}

export default BoyerMooreFind;