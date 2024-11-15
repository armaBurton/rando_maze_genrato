import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import sample from "lodash/sample";
import InnerArr from "./InnerArray/InnerArrys";
import ResetLabyrinth from "./ResetLabyrinth/ResetLabyrinth";

const Labyrinth = (size) => {
  const dim = 600 / size;
  const pixelRef = useRef();
  const [running, setRunning] = useState(false);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const [pixels, setPixels] = useState();

  const generateMaze = () => {
    if (running) return;

    // setPixels(ResetLabyrinth(pixelRef, size));
  };

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
