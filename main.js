import { getCharacterPatterns } from "./characters.js";

const makeEmptyScreen = (size) => {
  return Array.from({ length: size }, () => [..." ".repeat(size)]);
};

// const rotateGrid = (grid) => {
//   const rotated = [];
//   const rows = grid.length;
//   const cols = grid[0].length;

//   for (let col = 0; col < cols; col++) {
//     rotated.push([]);
//     for (let row = rows - 1; row >= 0; row--) {
//       rotated[col].push(grid[row][col]);
//     }
//   }
//   return rotated;
// };

const display = (letters) => {
  const max = Math.max(...letters.map((letter) => letter.length));
  const combined = Array.from({ length: max }, () => []);

  letters.forEach((letter) => {
    letter.forEach((row, rowIndex) => {
      combined[rowIndex] = combined[rowIndex].concat(row, [" "]); // Add space between letters
    });
  });

  console.log(combined.map((line) => line.join("")).join("\n"));
};

const make = (letters, size) => {
  const ascii = [];
  const letterPatterns = getCharacterPatterns(size);

  [...letters].forEach((letter) => {
    if (letter in letterPatterns) {
      const screen = makeEmptyScreen(size);
      letterPatterns[letter].forEach((fn) => fn(screen));
      ascii.push(screen);
    }
  });

  display(ascii);
};

const main = () => {
  const words = prompt("Enter letters or words:");
  const size = prompt("Enter the font size: ");

  make(words, size);
};

main();
//----------------------------testing section-----------------------------------

// console.log(makeEmptyScreen(5));
// console.log(makeEmptyScreen(4));

// const scr = makeEmptyScreen(5);
// verticalLine(0, 0, "*")(scr);
// console.log(scr);

// horizontalLine(1, 0, "*")(scr);
// console.log(scr);

// console.log(scr);
// diagonal(
//   [
//     [0, 0],
//     [4, 4],
//   ],
//   "*",
//   scr
// );
// console.log(scr);
