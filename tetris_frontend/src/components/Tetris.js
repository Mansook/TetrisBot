import React, { useEffect } from "react";
import "../css/mainboard.css";
import { useRef } from "react";
import { validateMove, validateRotate } from "../functions/validate";
import { drawBlock } from "../functions/drawBlock";

export const Tetris = () => {
  return <canvas className="board" />;
};

export default Tetris;
