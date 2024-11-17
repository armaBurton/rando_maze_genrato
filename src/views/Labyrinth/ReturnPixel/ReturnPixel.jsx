import React, { forwardRef } from "react";

const ReturnPixel = forwardRef((props, ref) => {
  const bool = String(props.visited);
  return (
    <div
      x={props.x}
      y={props.y}
      data-visited={bool}
      ref={ref}
      style={{
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
        borderRight: "1px solid black",
        borderLeft: "1px solid black",
        backgroundColor: "yellow",
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
