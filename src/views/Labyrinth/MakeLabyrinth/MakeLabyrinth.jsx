import { size, length } from "../../../utils/utils";

const MakeLabyrinth = () => {
  const initPixels = {};
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      initPixels[`${x}-${y}`] = {
        x: x,
        y: y,
        size: size,
        length: length,
        key: `${x}-${y}`,
      };
    }
  }
  return initPixels;
};

export default MakeLabyrinth;

// top: (pixelRef.current[`${x}-${y}`].style.borderTop =
//   `1px solid ${mazeBorder}`),
// bottom: (pixelRef.current[`${x}-${y}`].style.borderBottom =
//   `1px solid ${mazeBorder}`),
// right: (pixelRef.current[`${x}-${y}`].style.borderRight =
//   `1px solid ${mazeBorder}`),
// left: (pixelRef.current[`${x}-${y}`].style.borderLeft =
//   `1px solid ${mazeBorder}`),
// bkgnd: (pixelRef.current[`${x}-${y}`].style.backgroundColor =
//   `${mazeBkgnd}`),
// visited: pixelRef.current[`${x}-${y}`].setAttribute(
//   "data-visited",
//   "false",
// ),
// traversed: pixelRef.current[`${x}-${y}`].setAttribute(
//   "data-traversed",
//   "false",
// ),
// validPath: pixelRef.current[`${x}-${y}`].setAttribute(
//   "data-validPath",
//   "true",
// ),
// currentPosition: pixelRef.current[`${x}-${y}`].setAttribute(
//   "data-currentPosition",
//   "false",
// ),
