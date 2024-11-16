const ResetLabyrinth = (geometry) => {
  const initPixels = {}
  for (let x = 0; x < geometry.sizeX; x++) {
    for (let y = 0; y < geometry.sizeY; y++) {
      initPixels[`${x}-${y}`] = {
        x: x,
        sizeX: geometry.sizeX,
        y: y,
        sizeY: geometry.sizeY,
        length: geometry.length,
        top: true,
        bottom: true,
        right: true,
        left: true,
        visited: false,
      };
    }
  }
  return initPixels;
}


export default ResetLabyrinth