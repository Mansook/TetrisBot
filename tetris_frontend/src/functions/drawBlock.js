export const blockColor = (blockType) => {
  let color = 0;
  blockType.map((arr) => arr.map((v) => (v !== 0 ? (color = v) : color)));
  switch (color) {
    case 0:
      return "white";
    case 1:
      return "red";
    case 2:
      return "blue";
    case 3:
      return "skyblue";
    case 4:
      return "orange";
    case 5:
      return "green";
    case 6:
      return "pink";
    default:
      return "white";
  }
};

export const drawBlock = (block, ctx) => {
  if (ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    block.type.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          ctx.fillStyle = blockColor(block.type);
          ctx.fillRect(x + block.x, y + block.y, 1, 1);
        }
      });
    });
  }
};
