import React, { useEffect } from "react";
import "../css/mainboard.css";
import { useRef } from "react";
import { validateMove, validateRotate } from "../functions/validate";

export const Tetris = ({ CurrentBlock }) => {
  console.log("tlqkf");

  useEffect(() => {
    const keyHandler = (event) => {
      const inputKey = event.keyCode;
      const KEY = {
        LEFT: 37,
        RIGHT: 39,
        UP: 38,
        DOWN: 40,
      };
      switch (inputKey) {
        case KEY.UP:
          validateRotate(CurrentBlock);

          break;
        case KEY.DOWN:
          validateMove(CurrentBlock, 0, 1);

          break;
        case KEY.LEFT:
          validateMove(CurrentBlock, -1, 0);

          break;
        case KEY.RIGHT:
          validateMove(CurrentBlock, 1, 0);

          break;
        default:
          break;
      }
      //drawBlock(CurrentBlock, ctx);
    };
    window.addEventListener("keydown", keyHandler);
  }, [CurrentBlock]);

  return <canvas className="board" />;
};

export default Tetris;
