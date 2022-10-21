import { copy } from "./common";
import { move, rotate } from "./keyHandler";

export const validate = (block, matrix) => {
  let isValid = true;
  // some 메서드는 return true일 때 break, return false일 때는 continue 효과를 갖습니다.
  block.type.some((row, dy) => {
    row.some((value, dx) => {
      if (value > 0) {
        if (
          block.x + dx < 0 ||
          block.x + dx > 9 ||
          block.y + dy < 0 ||
          block.y + dy > 20 ||
          matrix[block.y + dy][block.x + dx] > 0
        ) {
          isValid = false;
          return true;
        }
      }
    });
    if (!isValid) {
      return true;
    }
  });

  return isValid;
};

export const validateMove = (block, matrix, x, y) => {
  const newBlock = copy(block);
  move(newBlock, x, y);
  if (validate(newBlock, matrix)) {
    move(block, x, y);
    return true;
  }

  return false;
};

export const validateRotate = (block, matrix) => {
  //깊은 복사 는 대상 변수값이 바뀔 때 원본 변숫값은 유지된다. 아래 코드는 깊은 복사 의 예이다. 타입 스크립트에서는 number 와 boolean 타입은 깊은 복사 형태로, 객체 와 배열 은 얕은 복사 방식으로 동작한다
  const newBlock = copy(block);
  rotate(newBlock);

  if (validate(newBlock, matrix)) {
    rotate(block);
    return true;
  }
  return false;
};
