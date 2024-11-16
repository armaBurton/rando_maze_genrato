const ResetLabyrinth = (pixelRef, row, col, setPixels, pixels) => {
  const walls = { top: true, right: true, bottom: true, left: true };
  const initPixels = {}
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      initPixels[`${i}x${j}`] = {
        visited: false,
        walls: walls,
        x: i,
        y: j,
      };
    }
    setPixels({ ...pixels, initPixels });
  }
};

export default ResetLabyrinth;
