export const drawBlock = (block, ctx) => {
  if (ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    block.type.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          ctx.fillStyle = "white";
          ctx.fillRect(x + block.x, y + block.y, 1, 1);
        }
      });
    });
  }
};
