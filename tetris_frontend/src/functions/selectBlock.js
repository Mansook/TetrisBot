import { BLOCK } from "../source/block";

export const selectRandomIndex = (length) => {
  return Math.floor(Math.random() * length);
};

export const selectRandomBlock = () => {
  return BLOCK[selectRandomIndex(BLOCK.length)];
};
export const createRandomBlock = () => {
  const randomBlock = {
    x: 0,
    y: 0,
    type: selectRandomBlock(),
  };
  return randomBlock;
};
