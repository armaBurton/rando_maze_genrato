const MakeLabyrinth = (geometry) => {
  const initPixels = {};
  for (let x = 0; x < geometry.size; x++) {
    for (let y = 0; y < geometry.size; y++) {
      initPixels[`${x}-${y}`] = {
        x: x,
        y: y,
        size: geometry.size,
        length: geometry.length,
        top: "true",
        bottom: "true",
        right: "true",
        left: "true",
        visited: "false",
        key: `${x}-${y}`,
      };
    }
  }
  return initPixels;
};

export default MakeLabyrinth;
