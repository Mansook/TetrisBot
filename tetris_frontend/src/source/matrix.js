export const initMatrix = () => {
  let matrix = [];
  for (let y = 0; y < 21; y++) {
    matrix.push(new Array(10).fill(0));
  }
  return matrix;
};

export const stack = (block, matrix) => {
  block.type.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value > 0) {
        matrix[y + block.y][x + block.x] = block.type[y][x];
      }
    });
  });
};

export const isLineFilled=(matrix)=>{
  let filled=[];
  for(let i=0;i<21;i++){
    if(matrix[i].every(v=>v>0)){
      filled.push(i);
    }
  }
  return filled;
}

export const lineRemove=(delArray,matrix)=>{
  delArray.forEach((y, i) => {
    matrix.splice(y, 1);
    matrix.unshift(new Array(matrix[0].length).fill(0));
});
}