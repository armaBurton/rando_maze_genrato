const ResetLabyrinth = (pixelRef, row, col, setPixels) => {
  const walls = { top: true, right: true, bottom: true, left: true };
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      pixelRef.current[`${i}x${j}`] = {
        visited: false,
        walls: walls,
        x: i,
        y: j,
      };
    }
  }
  setPixels({ ...pixelRef.current });
};

export default ResetLabyrinth;
