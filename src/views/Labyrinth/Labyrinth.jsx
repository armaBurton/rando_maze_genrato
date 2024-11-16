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
import MakePixelDivs from "./MakePixelDivs/MakePixelDivs";

const Labyrinth = forwardRef(({ sizeX, sizeY, ...props }, ref) => {

  console.log("Labyrinth")
  const geometry = {
    sizeX: sizeX,
    sizeY: sizeY,
    length: 600,
  };
  const labyrinthRow = [];
  const pixelRef = useRef({});
  const [running, setRunning] = useState(false);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const [pixelDiv, setPixelDiv] = useState();
  const [pixels, setPixels] = useState(ResetLabyrinth(geometry))

  const pixelComponents = [];
  const showPixels = () => {
    for (let x = 0; x < sizeX; x++) {
      for (let y = 0; y < sizeY; y++) {
        //keep these, they work
        // console.log(pixels[`${x}-${y}`].x)
        // console.log(pixels[`${x}-${y}`].y)
        // console.log(pixels[`${x}-${y}`].visited)
        pixelComponents.push
      }
    }
  }

  showPixels();

  useEffect(() => {
    // ResetLabyrinth(pixelRef, sizeX, sizeY, setPixels, pixels);
    //   READING PIXELS!!!!!
    // console.log(JSON.stringify(pixels))
    // const pixel = pixels["0x0"];
    // console.log(pixel);
  }, [])

  useImperativeHandle(ref, () => ({
    // toggleCellBorder: (row, col, border) => {
    //   const index = { row, col };
    //   toggleBorder(index, border);
    // },
  }));


  const generateMaze = () => {
    if (running) return;

    // MakePixelDivs();


    // setPixels(ResetLabyrinth(pixelRef, size));
  };


  return (
    <>
      <div className="mazeContainer">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${geometry.x}, ${geometry.length / geometry.x}px)`,
          }}
        >
          {/* <MakePixelDivs pixels={pixels}
            pixelRef={pixelRef}
            sizeX={geometry.sizeX}
            sizeY={geometry.sizeY}
            length={geometry.length} /> */}
          {/* {pixels ? MakePixelDivs(pixels, setPixelDiv, geometry, pixelRef) : () => { }} */}
        </div>
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
});

export default Labyrinth;
