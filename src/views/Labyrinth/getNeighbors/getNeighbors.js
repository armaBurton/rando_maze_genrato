const getNeighbors = (pixelRef, size, x, y) => {
  const neighbors = [];
  // console.log(typeof `${x - 1}-${y}`);
  // console.log(`${x - 1}-${y}`);
  console.log(pixelRef.current[`${x + 1}-${y}`].getAttribute("data-visited"));
  // console.log(pixelRef.current[`${x - 1}-${y}`]);
  // console.log(pixelRef.current[`${x}-${y - 1}`]);
  // console.log(pixelRef.current[`${x}-${y + 1}`]);
  if (
    x - 1 >= 0 &&
    pixelRef.current[`${x - 1}-${y}`].getAttribute("data-visited") === "false"
  ) {
    neighbors.push(pixelRef.current[`${x - 1}-${y}`]);
  }

  if (
    x + 1 < size &&
    pixelRef.current[`${x + 1}-${y}`].getAttribute("data-visited") === "false"
  ) {
    neighbors.push(pixelRef.current[`${x + 1}-${y}`]);
  }

  if (
    y - 1 >= size &&
    pixelRef.current[`${x}-${y - 1}`].getAttribute("data-visited") === "false"
  ) {
    neighbors.push(pixelRef.current[`${x}-${y - 1}`]);
  }

  if (
    y + 1 < size &&
    pixelRef.current[`${x}-${y + 1}`].getAttribute("data-visited") === "false"
  ) {
    neighbors.push(pixelRef.current[`${x}-${y + 1}`]);
  }

  console.log(neighbors);
  return neighbors;
};

export default getNeighbors;
