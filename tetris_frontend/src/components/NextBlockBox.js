import React, { useEffect } from "react";
import { useRef } from "react";
import { drawBlock } from "../functions/drawBlock";

const NextBlockBox = ({ blockSize, NextBlock }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    const ctx = box?.getContext("2d");

    const setBox = () => {
      if (box) {
        box.width = blockSize * 5;
        box.height = blockSize * 5;
        ctx?.scale(blockSize, blockSize);
      }
    };
    setBox();
    drawBlock(NextBlock, ctx);
  });
  return <canvas className="nextBlockBox" ref={boxRef} />;
};

export default NextBlockBox;
