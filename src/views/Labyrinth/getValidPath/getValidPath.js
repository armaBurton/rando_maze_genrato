const getValidPath = (currentPixel, pixelRef, size, x, y, visited) => {
  const validPaths = [];
  //   console.log("*** -14 -getValidPath.js *** typeof x ==> ", typeof x);
  if (
    x - 1 >= 0 &&
    currentPixel.style.borderTop === "none" &&
    pixelRef.current[`${x - 1}-${y}`].getAttribute("data-validpath") &&
    !visited.has(`${x - 1}-${y}`) &&
    pixelRef.current[`${x - 1}-${y}`].getAttribute("data-validpath") !== "false"
  ) {
    // console.log("up ");
    validPaths.push(pixelRef.current[`${x - 1}-${y}`]);
  }
  if (
    x + 1 < size - 1 &&
    currentPixel.style.borderBottom === "none" &&
    !visited.has(`${x + 1}-${y}`) &&
    pixelRef.current[`${x + 1}-${y}`].getAttribute("data-validpath") !== "false"
  ) {
    // console.log("down ");
    validPaths.push(pixelRef.current[`${x + 1}-${y}`]);
  }
  if (
    y - 1 >= 0 &&
    currentPixel.style.borderLeft === "none" &&
    !visited.has(`${x}-${y - 1}`) &&
    pixelRef.current[`${x}-${y - 1}`].getAttribute("data-validpath") !== "false"
  ) {
    // console.log("left ");
    validPaths.push(pixelRef.current[`${x}-${y - 1}`]);
  }
  if (
    y + 1 < size - 1 &&
    currentPixel.style.borderRight === "none" &&
    !visited.has(`${x}-${y + 1}`) &&
    pixelRef.current[`${x}-${y + 1}`].getAttribute("data-validpath") !== "false"
  ) {
    // console.log("right");
    validPaths.push(pixelRef.current[`${x}-${y + 1}`]);
  }
  //   console.log(validPaths[0]);
  return validPaths;
};

export default getValidPath;
