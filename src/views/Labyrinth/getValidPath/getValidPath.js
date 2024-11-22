const getValidPath = (pixelRef, visited, path, size, x, y) => {
  const directions = [
    { dx: -1, dy: 0, border: "borderTop" }, // Up
    { dx: 1, dy: 0, border: "borderBottom" }, // Down
    { dx: 0, dy: -1, border: "borderLeft" }, // Left
    { dx: 0, dy: 1, border: "borderRight" }, // Right
  ];
  directions.forEach(({ dx, dy, border }) => {
    const newX = x + dx;
    const newY = y + dy;
    const oldKey = `${x}-${y}`;
    const key = `${newX}-${newY}`;
    const oldPixel = pixelRef.current[oldKey];
    const pixel = pixelRef.current[key];
    if (newX >= 0 && newX < size && newY >= 0 && newY < size) {
      const oldPix = oldPixel.style[border];
      const newPix = pixel.style[border];
      console.log(`*** oldPix ==> ` + oldPix, x, y);
      console.log(`*** newPix ==> ` + newPix, newX, newY);
    }
  });
};

// const visited = (id, visitedSet) => {
//   return visitedSet.has(id)
// }

// const getValidPath = (currentPixel, pixelRef, size, x, y, visitedSet) => {
//   const validPaths = []
//   let exits = 0;

//   const directions = [
//     { dx: -1, dy: 0, border: "borderTop" }, // Up
//     { dx: 1, dy: 0, border: "borderBottom" }, // Down
//     { dx: 0, dy: -1, border: "borderLeft" }, // Left
//     { dx: 0, dy: 1, border: "borderRight" }, // Right
//   ];

//   directions.forEach(({ dx, dy, border }) => {
//     const newX = x + dx;
//     const newY = y = dy;

//     const id = `${newX}-${newY}`

//     console.log(currentPixel.style[border])
//     if (
//       newX >= 0 &&
//       newX < size &&
//       newY >= 0 &&
//       newY < size && // Ensure within bounds
//       currentPixel.style[border] === "none" && // Ensure no wall
//       !visited(id, visitedSet) && // Ensure not visited
//       pixelRef.current[id]?.getAttribute("data-validpath") !== "false" // Ensure valid path
//     ) {
//       validPaths.push(pixelRef.current[id]); // Add to valid paths
//       exits++; // Increment exits
//     }
//   });

//   currentPixel.setAttribute("data-exits", exits); // Update exits count
//   return validPaths;
// };

// const visited = (id, visitedStack) => {
//   visitedStack.map((pix) => {
//     const getId = pix.getAttribute("data-id")
//     console.log(id, getId)
//     if (id === getId) return true
//     return false
//   })
// }

// const getValidPath = (currentPixel, pixelRef, size, x, y, visitedStack) => {
//   console.log("getValidPath")
//   console.log(visitedStack.length)
//   const validPaths = [];
//   let exits = 0;
//   visited(`${x + 1}-${y}`, visitedStack)
//   //   console.log("*** -14 -getValidPath.js *** typeof x ==> ", typeof x);
//   if (
//     x - 1 >= 0 &&
//     currentPixel.style.borderTop === "none" &&
//     pixelRef.current[`${x - 1}-${y}`].getAttribute("data-validpath") &&
//     !visited(`${x - 1}-${y}`, visitedStack) &&
//     pixelRef.current[`${x - 1}-${y}`].getAttribute("data-validpath") !== "false"
//   ) {
//     // console.log("up ");
//     validPaths.push(pixelRef.current[`${x - 1}-${y}`]);
//     exits++;
//   }
//   if (
//     x + 1 < size - 1 &&
//     currentPixel.style.borderBottom === "none" &&
//     !visited(`${x + 1}-${y}`, visitedStack) &&
//     pixelRef.current[`${x + 1}-${y}`].getAttribute("data-validpath") !== "false"
//   ) {
//     // console.log("down ");
//     validPaths.push(pixelRef.current[`${x + 1}-${y}`]);
//     exits++;
//   }
//   if (
//     y - 1 >= 0 &&
//     currentPixel.style.borderLeft === "none" &&
//     !visited(`${x}-${y - 1}`, visitedStack) &&
//     pixelRef.current[`${x}-${y - 1}`].getAttribute("data-validpath") !== "false"
//   ) {
//     // console.log("left ");
//     validPaths.push(pixelRef.current[`${x}-${y - 1}`]);
//     exits++
//   }
//   if (
//     y + 1 < size - 1 &&
//     currentPixel.style.borderRight === "none" &&
//     !visited(`${x}-${y + 1}`, visitedStack) &&
//     pixelRef.current[`${x}-${y + 1}`].getAttribute("data-validpath") !== "false"
//   ) {
//     // console.log("right");
//     validPaths.push(pixelRef.current[`${x}-${y + 1}`]);
//     exits++
//   }
//   currentPixel.setAttribute("data-exits", exits)
//   return validPaths;
// };

// export default getValidPath;

export default getValidPath;
