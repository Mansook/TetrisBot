import { CurrentBlock, NextBlock, requestAnimationId, time } from "../global";
import { drawBlock } from "./drawBlock";
import { rebuild } from "./rebuild";
import { createRandomBlock } from "./selectBlock";
import { validateMove } from "./validate";

export const repeatMotion = (timeStamp) => {
  if (timeStamp - time > 1000) {
    if (!validateMove(CurrentBlock, 0, 1)) {
      CurrentBlock = NextBlock;
      NextBlock = createRandomBlock();
    }
    time = timeStamp;
  }
};
