export const changeBgColor = (
  divRef,
  lastGrid,
  setLastGrid,
  size,
  setXVal,
  setYVal,
) => {
  const x = randoNumbo(size);
  const y = randoNumbo(size);

  const r = randoNumbo(256);
  const g = randoNumbo(256);
  const b = randoNumbo(256);
  if (lastGrid) {
    const lastDiv = divRef.current[lastGrid];
    lastDiv.style.backgroundColor = "var( --maze-bkgnd-init)";
  }
  const selectedDiv = divRef.current[`${x}-${y}`];
  if (selectedDiv) {
    selectedDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  } else {
    console.log("div not found");
  }
  setLastGrid(`${x}-${y}`);
  setXVal(x);
  setYVal(y);
};

export const randoNumbo = (size) => {
  return Math.floor(Math.random() * (size - 1));
};

export const timeout = (time) => {
  return new Promise((res) => setTimeout(res, time));
};

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const geometry = {
  size: 30,
  length: 600,
};

export const { size, length } = geometry;

const styleDefs = {
  mazeBorder: "var(--bkgnd-drk)",
  mazeBkgnd: "var( --maze-bkgnd-init)",
  pixelPath: "var(--hookers-green)",
  currentPixel: "var(--rose-red)",
  validPixel: "var(--rose)",
};

export const { mazeBorder, mazeBkgnd, pixelPath, currentPixel, validPixel } =
  styleDefs;

// export const up = (currentPixel) => {
//   const path = currentPixel.style.borderTop === "none" ? true : false;
//   return path;
// };
// export const down = (currentPixel) => {
//   return currentPixel.style.borderBottom === "none" ? true : false;
// };
// export const left = (currentPixel) => {
//   return currentPixel.style.borderLeft === "none" ? true : false;
// };
// export const right = (currentPixel) => {
//   return currentPixel.style.borderRight === "none" ? true : false;
// };
// export const validUp = (pixelRef, neighbors) => {
//   console.log(pixelRef.current[neighbors].getAttribute("data-validpath"));
//   const up =
//     pixelRef.current[neighbors].getAttribute("data-validpath") === true
//       ? true
//       : false;
//   return up;
// };
// export const validDown = (pixelRef, neighbors) => {
//   const down =
//     pixelRef.current[neighbors.down].getAttribute("data-validpath") === true
//       ? true
//       : false;
//   return down;
// };
// export const validLeft = (pixelRef, neighbors) => {
//   return pixelRef.current[neighbors.left].getAttribute("data-validpath") ===
//     true
//     ? true
//     : false;
// };
// export const validRight = (pixelRef, neighbors) => {
//   return pixelRef.current[neighbors.right].getAttribute("data-validpath") ===
//     true
//     ? true
//     : false;
// };
