import "./css/mainboard.css";
import { useCustomSize } from "./hooks/useCustomSize";
import NextBlockBox from "./components/NextBlockBox";
import { useEffect, useRef, useState } from "react";
import { createRandomBlock, selectRandomBlock } from "./functions/selectBlock";
import { Tetris } from "./components/Tetris";
import { validateMove, validateRotate } from "./functions/validate";

import { drawBlock } from "./functions/drawBlock";
import { copy } from "./functions/common";
import { initMatrix, stack } from "./source/matrix";
import { drawBoard } from "./functions/drawBoard";
function App() {
  // window.addEventListener("keydown");
  const clientRect = useCustomSize();

  const boardWidth = clientRect.width;
  const boardHeight = clientRect.height;
  const blockSize = Math.floor(boardWidth / 10);

  let CurrentBlock = createRandomBlock();
  let NextBlock = createRandomBlock();
  let time = 0;
  let map = initMatrix();

  /*const [CurrentBlock, setCurrentBlock] = useState(createRandomBlock());
  const [NextBlock, setNextBlock] = useState(createRandomBlock());
  const [time, setTime] = useState(0);*/

  const board = document.querySelector(".board");
  const boardctx = board?.getContext("2d");

  const box = document.querySelector(".nextBlockBox");
  const boxctx = box?.getContext("2d");

  const reDraw = () => {
    drawBlock(CurrentBlock, boardctx);
    drawBlock(NextBlock, boxctx);
    drawBoard(map, boardctx);
  };

  const setBoard = () => {
    if (board && box) {
      board.width = boardWidth;
      board.height = boardHeight;
      boardctx?.scale(blockSize, blockSize);

      box.width = blockSize * 5;
      box.height = blockSize * 5;
      boxctx?.scale(blockSize, blockSize);

      reDraw();
    }
  };

  const repeatMotion = (timeStamp) => {
    if (timeStamp - time > 800) {
      if (!validateMove(CurrentBlock, map, 0, 1)) {
        stack(CurrentBlock, map);
        console.log(map);
        CurrentBlock = copy(NextBlock);
        NextBlock = createRandomBlock();
      }
      reDraw();
      time = timeStamp;
    }
    window.requestAnimationFrame(repeatMotion);
  };

  const keyHandler = (event) => {
    const inputKey = event.key;

    const KEY = {
      LEFT: "ArrowLeft",
      RIGHT: "ArrowRight",
      UP: "ArrowUp",
      DOWN: "ArrowDown",
    };
    switch (inputKey) {
      case KEY.UP:
        validateRotate(CurrentBlock, map);
        break;
      case KEY.DOWN:
        validateMove(CurrentBlock, map, 0, 1);
        break;
      case KEY.LEFT:
        validateMove(CurrentBlock, map, -1, 0);
        break;
      case KEY.RIGHT:
        validateMove(CurrentBlock, map, 1, 0);
        break;
      default:
        return;
    }
    reDraw();
  };
  setBoard();
  repeatMotion();
  window.addEventListener("keydown", keyHandler);

  return (
    <div>
      <div className="main">
        <div
          style={{
            marginLeft: "50px",
          }}
        >
          <Tetris />
        </div>

        <div
          style={{
            marginLeft: "50px",
            marginBottom: "200px",
          }}
        >
          <div>
            <NextBlockBox />
            <div>단계</div>
            <div className="texts"></div>
            <div>레벨</div>
            <div className="texts"></div>
            <div>점수</div>
            <div className="texts"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
