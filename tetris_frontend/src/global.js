import { createRandomBlock } from "./functions/selectBlock";

export const MainBoardCol = 10;
export const MainBoardRow = 21;

//export let CurrentBlock = createRandomBlock();
//export const NextBlock = createRandomBlock();
export let CurrentBlock = createRandomBlock();
export let NextBlock = createRandomBlock();

export let time = 0;
export let requestAnimationId = null;
