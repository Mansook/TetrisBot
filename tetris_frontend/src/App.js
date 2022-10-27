import "./css/mainboard.css";
import { useCustomSize } from "./hooks/useCustomSize";
import NextBlockBox from "./components/NextBlockBox";
import { useEffect, useRef, useState } from "react";
import { createRandomBlock } from "./functions/selectBlock";
import { Tetris } from "./components/Tetris";
import { validateMove, validateRotate } from "./functions/validate";

import { drawBlock } from "./functions/drawBlock";

import { initMatrix, isLineFilled, lineRemove, stack } from "./source/matrix";
import { drawBoard } from "./functions/drawBoard";
import { CalLevel, CalScore, CalStage } from "./functions/userData";
import UserInterface from "./components/UserInterface";
import { speed } from "./source/stages";

const App = () => {
  const clientRect = useCustomSize();
  const boardWidth = clientRect.width;
  const boardHeight = clientRect.height;
  const blockSize = Math.floor(boardWidth / 10);

  const [map, setMap] = useState(initMatrix());
  const [CurrentBlock, setCurrentBlock] = useState(createRandomBlock());
  const [NextBlock, setNextBlock] = useState(createRandomBlock());
  const [FilledLines, setFilledlines] = useState([]);
  const [timeForRemoved, setTimeForRemoved] = useState(0);
  const [cur, setCur] = useState(0);
  const [onGame, setOnGame] = useState(false);

  const [data, setData] = useState({
    score: 0,
    level: 1,
    stage: 1,
  });

  const repeatRef = useRef(0);

  const board = document.querySelector(".board");
  const boardctx = board?.getContext("2d");

  const box = document.querySelector(".nextBlockBox");
  const boxctx = box?.getContext("2d");

  const reDraw = () => {
    drawBlock(CurrentBlock, boardctx);
    drawBlock(NextBlock, boxctx, "NextBlockBox");
    drawBoard(map, boardctx);
  };

  const ChangeBlocks = () => {
    setCurrentBlock({
      ...NextBlock,
      x: NextBlock.x + 3,
    });
    setNextBlock(createRandomBlock());
  };

  useEffect(() => {
    setMap(initMatrix());
    setCurrentBlock({ ...CurrentBlock, x: CurrentBlock.x + 3 });
  }, []);

  useEffect(() => {
    const keyHandler = (event) => {
      const inputKey = event.keyCode;

      const KEY = {
        LEFT: 37,
        RIGHT: 39,
        UP: 38,
        DOWN: 40,
        SPACE: 32,
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

        case KEY.SPACE:
          while (validateMove(CurrentBlock, map, 0, 1));
          break;
        default:
          return;
      }
      reDraw();
    };
    if (onGame) window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  });
  useEffect(() => {
    const setBoard = () => {
      if (board) {
        board.width = boardWidth;
        board.height = boardHeight;
        boardctx?.scale(blockSize, blockSize);
      }
      if (box) {
        box.width = blockSize * 5;
        box.height = blockSize * 5;
        boxctx?.scale(blockSize, blockSize);
      }
      reDraw();
    };
    setBoard();
  });

  useEffect(() => {
    const repeatMotion = (timeStamp) => {
      if (timeStamp - cur > speed[data.stage]) {
        if (!validateMove(CurrentBlock, map, 0, 1)) {
          stack(CurrentBlock, map);
          ChangeBlocks();
        }
        //  reDraw();
        setCur(timeStamp);
      }
      setFilledlines(isLineFilled(map));
      if (FilledLines.length > 0) {
        if (timeForRemoved === 0) {
          setTimeForRemoved(timeStamp);
        }

        if (timeStamp - timeForRemoved > 400) {
          setData({
            ...data,
            score: data.score + CalScore(FilledLines.length),
            stage: CalStage(data.score + CalScore(FilledLines.length)),
          });
          lineRemove(FilledLines, map);
          setFilledlines([]);
          setTimeForRemoved(0);
          //  reDraw();
        }
      }

      if (
        JSON.stringify(CurrentBlock.type) === JSON.stringify(NextBlock.type)
      ) {
        setNextBlock(createRandomBlock());
        reDraw();
      }
      if (map[1].some((c) => c > 0)) {
        setOnGame(false);
        alert("game Over");
      }
      repeatRef.current = requestAnimationFrame(repeatMotion);
    };
    if (onGame) repeatRef.current = requestAnimationFrame(repeatMotion);

    return () => cancelAnimationFrame(repeatRef.current);
  });

  return (
    <div>
      <div className="main">
        <div
          style={{
            marginLeft: "50px",
          }}
        >
          <Tetris fowardRef={repeatRef} />
        </div>

        <div
          style={{
            marginLeft: "50px",
            marginBottom: "200px",
          }}
        >
          <div style={{ marginTop: "50px" }}>
            <NextBlockBox />
            <UserInterface data={data} />
            <button onClick={() => setOnGame(true)}>tlwkr</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
