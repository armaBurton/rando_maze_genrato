import React, { forwardRef } from "react";
import { mazeBkgnd, mazeBorder } from "../../../utils/utils";

const ReturnPixel = forwardRef((props, ref) => {
  const visited = String(props.visited);
  const traversed = String(props.traversed);
  const validPath = String(props.validPath);
  const currentPosition = String(props.currentPosition);
  return (
    <div
      x={props.x}
      y={props.y}
      data-visited={"false"}
      data-traversed={"false"}
      data-validpath={"true"}
      data-currentposition={"false"}
      ref={ref}
      style={{
        borderTop: props?.top ? "1px solid black" : "none",
        borderBottom: props?.bottom ? "1px solid black" : "none",
        borderRight: props?.right ? "1px solid black" : "none",
        borderLeft: props?.left ? "1px solid black" : "none",
        backgroundColor: props.backgroundColor,
        width: props.length / props.size,
        height: props.length / props.size,
        fontSize: "9px",
      }}
      className="pixelComponent"
    ></div>
  );
});

const getBackgroundColor = () => {};

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
