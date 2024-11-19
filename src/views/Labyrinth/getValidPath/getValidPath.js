


const visited = (id, controlStack) => {
  controlStack.map((pix) => {
    const getId = pix.getAttribute("data-id")
    console.log(id, getId)
    if (id === getId) return true
    return false
  })
}

const getValidPath = (currentPixel, pixelRef, size, x, y, controlStack) => {
  console.log("getValidPath")
  console.log(controlStack.length)
  const validPaths = [];
  let exits = 0;
  visited(`${x + 1}-${y}`, controlStack)
  //   console.log("*** -14 -getValidPath.js *** typeof x ==> ", typeof x);
  if (
    x - 1 >= 0 &&
    currentPixel.style.borderTop === "none" &&
    pixelRef.current[`${x - 1}-${y}`].getAttribute("data-validpath") &&
    !visited(`${x - 1}-${y}`, controlStack) &&
    pixelRef.current[`${x - 1}-${y}`].getAttribute("data-validpath") !== "false"
  ) {
    // console.log("up ");
    validPaths.push(pixelRef.current[`${x - 1}-${y}`]);
    exits++;
  }
  if (
    x + 1 < size - 1 &&
    currentPixel.style.borderBottom === "none" &&
    !visited(`${x + 1}-${y}`, controlStack) &&
    pixelRef.current[`${x + 1}-${y}`].getAttribute("data-validpath") !== "false"
  ) {
    // console.log("down ");
    validPaths.push(pixelRef.current[`${x + 1}-${y}`]);
    exits++;
  }
  if (
    y - 1 >= 0 &&
    currentPixel.style.borderLeft === "none" &&
    !visited(`${x}-${y - 1}`, controlStack) &&
    pixelRef.current[`${x}-${y - 1}`].getAttribute("data-validpath") !== "false"
  ) {
    // console.log("left ");
    validPaths.push(pixelRef.current[`${x}-${y - 1}`]);
    exits++
  }
  if (
    y + 1 < size - 1 &&
    currentPixel.style.borderRight === "none" &&
    !visited(`${x}-${y + 1}`, controlStack) &&
    pixelRef.current[`${x}-${y + 1}`].getAttribute("data-validpath") !== "false"
  ) {
    // console.log("right");
    validPaths.push(pixelRef.current[`${x}-${y + 1}`]);
    exits++
  }
  currentPixel.setAttribute("data-exits", exits)
  return validPaths;
};

export default getValidPath;
