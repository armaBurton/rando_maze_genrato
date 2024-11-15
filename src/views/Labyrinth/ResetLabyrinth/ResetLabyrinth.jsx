const ResetLabyrinth = (pixelRef, size) => {
  console.log(size);
  for (let i = 0; i < size; i++) {
    //   const row = [];
    for (let j = 0; j < size; j++) {
      const walls = { top: true, right: true, bottom: true, left: true };
      const pixel = {
        visited: false,
        walls: walls,
        x: i,
        y: j,
      };
      // row.push(pixel);
      pixelRef.current[i][j] = pixel;
      console.log("test", JSON.stringify(pixel.visited));
    }
    //   setPixels([...pixels, row]);
  }
};

export default ResetLabyrinth;
