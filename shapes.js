export const putChar = (screen, rowIndex, colIndex, char) => {
  if (
    colIndex < 0 ||
    colIndex > screen[0].length ||
    rowIndex < 0 ||
    rowIndex > screen.length
  ) {
    return;
  }

  screen[rowIndex][colIndex] = char;
};

const adjust = ([currentRow, currentCol], [endRow, endCol]) => {
  return currentRow > endRow
    ? [currentRow - 1, currentCol + 1]
    : [currentRow + 1, currentCol + 1];
};

export const diagonal = (coordinates, char) => {
  const size = Math.abs(coordinates[0][0] - coordinates[1][1]);
  const range = Array.from({ length: size }, () => []);

  range[0] = coordinates[0];
  for (let currCoordinates = 1; currCoordinates < size; currCoordinates++) {
    range[currCoordinates] = adjust(range[currCoordinates - 1], coordinates[1]);
  }

  return function (screen) {
    range.forEach(([rowIndex, colIndex]) => {
      putChar(screen, rowIndex, colIndex, char);
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
