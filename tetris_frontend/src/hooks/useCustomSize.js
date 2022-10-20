import { RefObject, useEffect, useState } from "react";

export const useCustomSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [blockSize, setBlockSize] = useState(0);

  useEffect(() => {
    const setClientWidthHeight = () => {
      const columnBlocks = 21;
      const rowBlocks = 10;

      const windowInnerWidth =
        window.innerWidth > 660 ? 660 : window.innerWidth;

      const boardWidth = Math.floor(windowInnerWidth * 0.6);

      setBlockSize(Math.floor(boardWidth / columnBlocks));

      setHeight(Math.floor(blockSize * columnBlocks));
      setWidth(Math.floor(blockSize * rowBlocks));
    };
    setClientWidthHeight();

    window.addEventListener("resize", setClientWidthHeight);

    return () => {
      window.removeEventListener("resize", setClientWidthHeight);
    };
  });

  const clientRect = { width, height, blockSize };

  return clientRect;
};
