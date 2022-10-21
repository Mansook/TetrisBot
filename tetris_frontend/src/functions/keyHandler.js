/*export const move = (block, x, y) => {
  block.x += x;
  block.y += y;
};

export const rotate = (block) => {
  block.type.forEach((row, y) => {
    for (let x = 0; x < y; x++) {
      const temp = block.type[x][y];
      block.type[x][y] = block.type[y][x];
      block.type[y][x] = temp;
    }
  });

  block.type.forEach((row) => {
    row.reverse();
  });
};
*/

export const move = (block, x, y) => {
  block.x += x;
  block.y += y;
};

export const rotate = (block) => {
  block.type.forEach((row, y) => {
    for (let x = 0; x < y; x++) {
      const temp = block.type[x][y];
      block.type[x][y] = block.type[y][x];
      block.type[y][x] = temp;
    }
  });

  block.type.forEach((row) => {
    row.reverse();
  });
};
