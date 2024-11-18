import React, { forwardRef } from "react";
import { mazeBkgnd, mazeBorder } from "../../../utils/utils";

const ReturnPixel = forwardRef((props, ref) => {
  const visited = String(props.visited);
  const traversed = String(props.traversed);
  const validPath = String(props.validPath);
  const currentPosition = String(props.currentPosition);
  // console.log("ReturnPixel", props);
  return (
    <div
      x={props.x}
      y={props.y}
      data-visited={visited}
      data-traversed={traversed}
      data-validpath={validPath}
      data-currentposition={currentPosition}
      ref={ref}
      style={{
        borderTop: `1px solid ${mazeBorder}`,
        borderBottom: `1px solid ${mazeBorder}`,
        borderRight: `1px solid ${mazeBorder}`,
        borderLeft: `1px solid ${mazeBorder}`,
        backgroundColor: `${mazeBkgnd}`,
        width: props.length / props.size,
        height: props.length / props.size,
        fontSize: "9px",
      }}
      className="pixelComponent"
    ></div>
  );
});

export default ReturnPixel;

//keep these, they work
// console.log(pixels[`10-10`]);
// console.log(pixels[`${x}-${y}`]);
// console.log(pixels[`${x}-${y}`].x);
// console.log(pixels[`${x}-${y}`].y);
// console.log(pixels[`${x}-${y}`].visited);
// console.log(pixels[`10-10`].visited);
// pixels[`10-10`].visited = "true";
// console.log(pixels[`10-10`].visited);
