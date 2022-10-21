import { roundRect } from "../source/rectDesign";

const readColor = (v) => {
  switch (v) {
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
export const drawBoard = (matrix, ctx) => {
  if (ctx) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          ctx.fillStyle = readColor(value);
          roundRect(ctx,x, y, 1, 1,0.1)
          
        }
      });
    });
  }
};
