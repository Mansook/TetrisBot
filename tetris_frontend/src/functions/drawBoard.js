export const drawBoard = (matrix, ctx) => {
  if (ctx) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          ctx.fillStyle = "white";
          ctx.fillRect(x, y, 1, 1);
        }
      });
    });
  }
};
