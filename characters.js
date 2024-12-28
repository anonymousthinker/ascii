import { verticalLine, horizontalLine, diagonal } from "./shapes.js";

export const getCharacterPatterns = (size) => {
  const ZERO = 0;
  const MIDDLE = Math.floor(size / 2);
  const letterPatterns = {
    O: [
      verticalLine(ZERO, ZERO, "*"),
      horizontalLine(1, ZERO, "*"),
      verticalLine(size - 1, ZERO, "*"),
      horizontalLine(1, size - 1, "*"),
    ],
    A: [
      verticalLine(ZERO, ZERO, "*"),
      horizontalLine(ZERO, ZERO, "*"),
      horizontalLine(ZERO, size - 1, "*"),
      verticalLine(MIDDLE, ZERO, "*"),
    ],
    H: [
      horizontalLine(ZERO, ZERO, "*"),
      verticalLine(MIDDLE, ZERO, "*"),
      horizontalLine(ZERO, size - 1, "*"),
    ],
    E: [
      horizontalLine(ZERO, ZERO, "*"),
      verticalLine(ZERO, 1, "*"),
      verticalLine(MIDDLE, 1, "*"),
      verticalLine(size - 1, 1, "*"),
    ],
    L: [verticalLine(size - 1, 1, "*"), horizontalLine(ZERO, ZERO, "*")],
    I: [
      verticalLine(ZERO, ZERO, "*"),
      horizontalLine(1, MIDDLE, "*"),
      verticalLine(size - 1, ZERO, "*"),
    ],
    K: [
      horizontalLine(ZERO, ZERO, "*"),
      diagonal(
        [
          [MIDDLE, 1],
          [ZERO, size],
        ],
        "*"
      ),
      diagonal(
        [
          [MIDDLE, 1],
          [size, size],
        ],
        "*"
      ),
    ],
    M: [
      horizontalLine(ZERO, ZERO, "*"),
      diagonal(
        [
          [ZERO, ZERO],
          [MIDDLE, MIDDLE],
        ],
        "*"
      ),
      diagonal(
        [
          [MIDDLE, MIDDLE],
          [ZERO, size],
        ],
        "*"
      ),
      horizontalLine(ZERO, size - 1, "*"),
    ],
    N: [
      horizontalLine(ZERO, ZERO, "*"),
      diagonal(
        [
          [ZERO, ZERO],
          [size, size],
        ],
        "*"
      ),
      horizontalLine(ZERO, size - 1, "*"),
    ],
  };

  return letterPatterns;
};
