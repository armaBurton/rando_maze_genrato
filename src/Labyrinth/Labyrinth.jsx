import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import sample from "lodash/sample";

const Labyrinth = (size) => {
  const [grid, setGrid] = useState([]);

  return (
    <>
      <div className="mazeContainer">
        {/* <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${size}, ${dim}px)`,
          }}
        >
          {cells}
        </div> */}
      </div>
      <div className="buttonContainer">
        {/* <button className="mazeButton" onClick={() => generateMaze()}>
          Generate Maze
        </button>
        <button
          className="mazeButton"
          onClick={() =>
            changeBgColor(divRef, lastGrid, setLastGrid, size, setXVal, setYVal)
          }
        >
          Click
        </button> */}
      </div>
      <p className="coords">
        {/* {xVal >= 0 ? `${xVal}` : ``}-{yVal >= 0 ? `${yVal}` : ``} */}
      </p>
    </>
  );
};

export default Labyrinth;
