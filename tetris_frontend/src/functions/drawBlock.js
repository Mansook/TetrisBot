import { roundRect } from "../source/rectDesign";

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
      return "gray";
    case 7:
      return "pink";
    default:
      return "white";
  }
};

export const drawBlock = (block, ctx, type = "default") => {
  if (ctx && block !== undefined) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    block.type.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          ctx.fillStyle = blockColor(block.type);
          if (type === "NextBlockBox")
            roundRect(ctx, 1 + x + block.x, 1 + y + block.y, 1, 1, 0.1);
          else roundRect(ctx, x + block.x, y + block.y, 1, 1, 0.1);
        }
      });
    });
  }
};
