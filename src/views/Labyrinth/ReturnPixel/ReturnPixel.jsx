import React, { forwardRef } from "react";

const ReturnPixel = forwardRef((props, ref) => {
  // console.log(JSON.stringify(props));
  return (
    <div
      x={props.x}
      y={props.y}
      data-visited={JSON.stringify(props.visited)}
      data-width={JSON.stringify(props.length / props.size)}
      data-height={JSON.stringify(props.length / props.size)}
      data-top={JSON.stringify(props.top)}
      data-bottom={JSON.stringify(props.bottom)}
      data-left={JSON.stringify(props.left)}
      data-right={JSON.stringify(props.right)}
      ref={ref}
      style={{
        borderTop: props?.top ? "1px solid black" : "none",
        borderBottom: props?.bottom ? "1px solid black" : "none",
        borderRight: props?.right ? "1px solid black" : "none",
        borderLeft: props?.left ? "1px solid black" : "none",
        backgroundColor: "yellow",
        width: props.length / props.size,
        height: props.length / props.size,
        fontSize: "9px",
      }}
      className="pixelComponent"
    >
      {`${props.x}-${props.y}`}
    </div>
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
// pixels[`10-10`].visited = true;
// console.log(pixels[`10-10`].visited);
