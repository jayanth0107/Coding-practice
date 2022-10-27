// Determine if a Sudoku is valid, according to: http://sudoku.com.au/TheRules.aspx

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

// image.png
// http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png

// The input corresponding to the above configuration :

// ["53..7....", "6..195...", ".98....6.", "8...6...3", "4..8.3..1", "7...2...6", ".6....28.", "...419..5", "....8..79"]
// A partially filled sudoku which is valid.

// Note:

// A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.
// Return 0 / 1 ( 0 for false, 1 for true ) for this problem

const validSudoku = (A) => {
  //Check row validation
  let hash = new Map();

  for (let i = 0; i < A.length; i++) {
    hash.clear();
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === '.') continue;
      if (hash.has(A[i][j])) return 0;
      hash.set(A[i][j], 1);
    }
  }

  console.log('row clear');

  hash.clear();

  // Check column validation
  for (let i = 0; i < A.length; i++) {
    hash.clear();
    for (let j = 0; j < A[0].length; j++) {
      if (A[j][i] === '.') continue;
      if (hash.has(A[j][i])) return 0;
      hash.set(A[j][i], 1);
    }
  }

  console.log('col clear');

  hash.clear();

  //Check sub-grid validation

  let boxHash = new Set();

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      let idx = Math.floor(i / 3) + '' + Math.floor(j / 3);
      if (A[i][j] === '.') continue;
      if (boxHash.has('box' + idx + A[i][j])) return 0;
      boxHash.add('box' + idx + A[i][j]);
    }
  }

  return 1;
};

// console.log(
//   validSudoku([
//     '..5.....6',
//     '....14...',
//     '.........',
//     '.....92..',
//     '5....2...',
//     '.......3.',
//     '...54....',
//     '3.....42.',
//     '...27.6..',
//   ])
// ); //1

console.log(
  validSudoku([
    '....5..1.',
    '.4.3.....',
    '.....3..1',
    '8......2.',
    '..2.7....',
    '.15......',
    '.....2...',
    '.2.9.....',
    '..4......',
  ])
); //0
