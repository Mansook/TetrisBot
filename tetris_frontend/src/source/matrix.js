export const initMatrix = () => {
  let matrix = [];
  for (let y = 0; y < 21; y++) {
    matrix.push(new Array(10).fill(0));
  }
  return matrix;
};

export const stack = (block, matrix) => {
  block.type.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value > 0) {
        matrix[y + block.y][x + block.x] = block.type[y][x];
      }
    });
  });
};
