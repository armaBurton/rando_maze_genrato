import React, { useState, useEffect, forwardRef, useRef } from "react";
import { changeBgColor, timeout } from "../../utils/utils";
import MakeLabyrinth from "./MakeLabyrinth/MakeLabyrinth";
import ReturnPixel from "./ReturnPixel/ReturnPixel";
import getNeighbors from "./getNeighbors/getNeighbors";

const Labyrinth = forwardRef(({ size }, ref) => {
  const geometry = {
    size: size,
    length: 600,
    dim: 600 / size,
  };
  const pixelRef = useRef({});
  const [running, setRunning] = useState(false);
  const [lastGrid, setLastGrid] = useState(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const [pixels, setPixels] = useState(MakeLabyrinth(geometry));

  // useEffect(() => {
  //   const initPixels = MakeLabyrinth(geometry);
  //   // MakeLabyrinth(geometry, setPixels);
  //   setPixels(initPixels);
  // }, []);

  const pixelComponents = [];
  const renderLabyrinth = (reset) => {
    if (lastGrid && reset) {
      setXVal(0);
      setYVal(0);
      const lastDiv = pixelRef.current[lastGrid];
      lastDiv.style.backgroundColor = "yellow";
    }

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        pixelComponents.push(
          <ReturnPixel
            {...pixels[`${x}-${y}`]}
            key={`${x}-${y}`}
            ref={(e) => {
              if (!pixelRef.current[`${x}-${y}`]) {
                pixelRef.current[`${x}-${y}`] = e;
              }
            }}
          />,
        );
      }
    }
  };

  renderLabyrinth(false);

  useEffect(() => {
    // pixelRef.current["10-10"].style["visited"] = true;
    // console.log(pixelRef.current["10-10"].style.visited);
  }, []);

  const generateMaze = async () => {
    // if (running) return;

    renderLabyrinth(true);
    await timeout(1);

    setRunning(true);
    const stack = [];

    //1 initial pixel
    const currentPixel = pixelRef.current["0-0"];

    //2 mark current cell as visited
    currentPixel.style.visited = true;
    // console.log(currentPixel.style.visited);
    // console.log(currentPixel.getAttribute("x"));

    //3 push it to the stack
    stack.push(currentPixel);

    //4 while the stack is not empty
    while (stack.length > 0) {
      //a. popa a cell from the stack and make it a current cell
      const current = stack.pop();

      //find neightbors
      const nbs = getNeighbors(
        pixelRef,
        geometry.size,
        parseInt(current.getAttribute("x"), 10),
        parseInt(current.getAttribute("y"), 10),
      );
    }
    setRunning(false);
  };

  return (
    <>
      <div className="mazeContainer">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${geometry.size}, ${geometry.length / geometry.size}px)`,
          }}
        >
          {pixelComponents}
        </div>
      </div>
      <div className="buttonContainer">
        <button className="mazeButton" onClick={() => generateMaze()}>
          Generate Maze
        </button>
        <button
          className="mazeButton"
          onClick={() =>
            changeBgColor(
              pixelRef,
              lastGrid,
              setLastGrid,
              size,
              setXVal,
              setYVal,
            )
          }
        >
          Click
        </button>
      </div>
      <p className="coords">
        {xVal >= 0 ? `${xVal}` : ``}-{yVal >= 0 ? `${yVal}` : ``}
      </p>
    </>
  );
});

export default Labyrinth;
