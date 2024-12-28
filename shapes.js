export const putChar = (screen, yCor, xCor, char) => {
  if (xCor < 0 || xCor > screen[0].length || yCor < 0 || yCor > screen.length) {
    return;
  }

  screen[yCor][xCor] = char;
};

const adjust = ([row, col], [endRow, endCol]) => {
  return row > endRow ? [row - 1, col + 1] : [row + 1, col + 1];
};

export const diagonal = (coordinates, char) => {
  const size = Math.abs(coordinates[0][0] - coordinates[1][1]);
  const range = Array.from({ length: size }, () => []);

  range[0] = coordinates[0];
  for (let i = 1; i < size; i++) {
    range[i] = adjust(range[i - 1], coordinates[1]);
  }

  return function (screen) {
    range.forEach(([yCor, xCor]) => {
      putChar(screen, yCor, xCor, char);
    });
  };
};

export const horizontalLine = (row, start, char) => {
  return function (screen) {
    for (let index = row; index < screen.length; index += 1) {
      putChar(screen, index, start, char);
    }
  };
};

export const verticalLine = (row, start, char) => {
  return function (screen) {
    for (let index = start; index < screen[row].length; index += 1) {
      putChar(screen, row, index, char);
    }
  };
};
