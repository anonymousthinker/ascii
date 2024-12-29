import { verticalLine, horizontalLine, diagonal } from "./shapes.js";

export const getCharacterPatterns = (size, char) => {
  const ZERO = 0;
  const MIDDLE = Math.floor(size / 2);
  const letterPatterns = {
    O: [
      verticalLine(ZERO, ZERO, char),
      horizontalLine(1, ZERO, char),
      verticalLine(size - 1, ZERO, char),
      horizontalLine(1, size - 1, char),
    ],
    A: [
      verticalLine(ZERO, ZERO, char),
      horizontalLine(ZERO, ZERO, char),
      horizontalLine(ZERO, size - 1, char),
      verticalLine(MIDDLE, ZERO, char),
    ],
    H: [
      horizontalLine(ZERO, ZERO, char),
      verticalLine(MIDDLE, ZERO, char),
      horizontalLine(ZERO, size - 1, char),
    ],
    E: [
      horizontalLine(ZERO, ZERO, char),
      verticalLine(ZERO, 1, char),
      verticalLine(MIDDLE, 1, char),
      verticalLine(size - 1, 1, char),
    ],
    L: [verticalLine(size - 1, 1, char), horizontalLine(ZERO, ZERO, char)],
    I: [
      verticalLine(ZERO, ZERO, char),
      horizontalLine(1, MIDDLE, char),
      verticalLine(size - 1, ZERO, char),
    ],
    K: [
      horizontalLine(ZERO, ZERO, char),
      diagonal(
        [
          [MIDDLE, 1],
          [ZERO, size],
        ],
        char
      ),
      diagonal(
        [
          [MIDDLE, 1],
          [size, size],
        ],
        char
      ),
    ],
    M: [
      horizontalLine(ZERO, ZERO, char),
      diagonal(
        [
          [ZERO, ZERO],
          [MIDDLE, MIDDLE],
        ],
        char
      ),
      diagonal(
        [
          [MIDDLE, MIDDLE],
          [ZERO, size],
        ],
        char
      ),
      horizontalLine(ZERO, size - 1, char),
    ],
    N: [
      horizontalLine(ZERO, ZERO, char),
      diagonal(
        [
          [ZERO, ZERO],
          [size, size],
        ],
        char
      ),
      horizontalLine(ZERO, size - 1, char),
    ],
  };

  return letterPatterns;
};
