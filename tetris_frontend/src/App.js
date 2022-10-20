import "./App.css";
import "./css/mainboard.css";

import { useCustomSize } from "./hooks/useCustomSize";
import NextBlockBox from "./components/NextBlockBox";
import { useEffect, useState } from "react";
import { createRandomBlock, selectRandomBlock } from "./functions/selectBlock";
import { Tetris } from "./components/Tetris";
import { validateMove } from "./functions/validate";
import { requestAnimationId } from "./global";
import { drawBlock } from "./functions/drawBlock";
function App() {
  // window.addEventListener("keydown");
  const clientRect = useCustomSize();

  const boardWidth = clientRect.width;
  const boardHeight = clientRect.height;
  const blockSize = Math.floor(boardWidth / 10);

  const [CurrentBlock, setCurrentBlock] = useState(createRandomBlock());
  const [NextBlock, setNextBlock] = useState(createRandomBlock());
  const [time, setTime] = useState(0);
  const board = document.querySelector(".board");
  const boardctx = board?.getContext("2d");
  const setBoard = () => {
    if (board) {
      board.width = boardWidth;
      board.height = boardHeight;
      boardctx?.scale(blockSize, blockSize);
    }
  };
  setBoard();
  useEffect(() => {
    const board = document.querySelector(".board");
    const boardctx = board?.getContext("2d");

    const repeatMotion = (timeStamp) => {
      if (timeStamp - time > 2000) {
        if (!validateMove(CurrentBlock, 0, 1)) {
          setCurrentBlock(NextBlock);
          setNextBlock(createRandomBlock());
        }
        setTime(timeStamp);
      }
      let les = window.requestAnimationFrame(repeatMotion);

      drawBlock(CurrentBlock, boardctx);
    };
    repeatMotion(0);
  }, []);

  return (
    <div>
      <div className="main">
        <div
          style={{
            marginLeft: "50px",
          }}
        >
          <Tetris CurrentBlock={CurrentBlock} />
        </div>

        <div
          style={{
            marginLeft: "50px",
            marginBottom: "200px",
          }}
        >
          <div>
            <NextBlockBox blockSize={blockSize} NextBlock={NextBlock} />
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
