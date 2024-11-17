import React, { useState, forwardRef, useRef } from "react";
import { timeout } from "../../utils/utils";
import {
  length,
  size,
  mazeBkgnd,
  mazeBorder,
  pixelPath,
} from "../../utils/utils";
import sample from "lodash/sample";
import { shuffle } from "lodash";
import MakeLabyrinth from "./MakeLabyrinth/MakeLabyrinth";
import ReturnPixel from "./ReturnPixel/ReturnPixel";
import getNeighbors from "./getNeighbors/getNeighbors";

const Labyrinth = forwardRef(() => {
  const pixelRef = useRef({});
  const [running, setRunning] = useState(false);
  const [pixels] = useState(MakeLabyrinth());

  const pixelComponents = [];

  const resetLabyrinth = async () => {
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        console.log("resetLabyrinth: ", pixelRef.current[`${x}-${y}`].style);
        pixelRef.current[`${x}-${y}`].style.borderTop =
          `1px solid ${mazeBorder}`;
        pixelRef.current[`${x}-${y}`].style.borderBottom =
          `1px solid ${mazeBorder}`;
        pixelRef.current[`${x}-${y}`].style.borderRight =
          `1px solid ${mazeBorder}`;
        pixelRef.current[`${x}-${y}`].style.borderLeft =
          `1px solid ${mazeBorder}`;
        pixelRef.current[`${x}-${y}`].style.backgroundColor = `${mazeBkgnd}`;
        pixelRef.current[`${x}-${y}`].setAttribute("data-visited", "false");
      }
    }
    setRunning(false);
    await timeout(1);
  };

  const renderLabyrinth = async () => {
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

  renderLabyrinth();

  const generateMaze = async () => {
    if (running) return;
    console.log(running);
    resetLabyrinth();
    await timeout(1);
    renderLabyrinth();

    // console.log("generating maze");
    setRunning(true);
    const stack = [];

    //1 initial pixel
    // console.log("generateMaze");
    const currentPixel = pixelRef.current["0-0"];
    console.log("currentPixel: ", currentPixel);
    //2 mark current cell as visited
    currentPixel.setAttribute("data-visited", "true");

    //3 push it to the stack
    stack.push(currentPixel);

    //4 while the stack is not empty
    while (stack.length > 0) {
      //a. pop a cell from the stack and make it a current cell
      const current = stack.pop();

      //find neightbors
      const nbs = getNeighbors(
        pixelRef,
        size,
        parseInt(current.getAttribute("x"), 10),
        parseInt(current.getAttribute("y"), 10),
      );

      //b. if the current cell has any neighbors which have not been visited
      if (nbs && nbs.length > 0) {
        //i. push the current pixel ot the stack
        stack.push(current);

        //ii. choose an unvisited neighbor
        shuffle(nbs);
        const curNb = sample(nbs);
        // console.log(current, curNb);

        //iii. remove the wall between the current cell and the chosen cel.
        getUpdatedWalls(current, curNb);

        curNb.setAttribute("data-visited", "true");
        await timeout(10);
        stack.push(curNb);
      }
    }
    setRunning(false);
  };

  const getUpdatedWalls = (fromPixel, toPixel) => {
    fromPixel.style.backgroundColor = pixelPath;
    toPixel.style.backgroundColor = pixelPath;
    if (
      parseInt(fromPixel.getAttribute("y")) -
        parseInt(toPixel.getAttribute("y")) <
      0
    ) {
      fromPixel.style.borderRight = "none";
      toPixel.style.borderLeft = "none";
    }
    if (
      parseInt(fromPixel.getAttribute("y")) -
        parseInt(toPixel.getAttribute("y")) >
      0
    ) {
      fromPixel.style.borderLeft = "none";
      toPixel.style.borderRight = "none";
    }
    if (
      parseInt(fromPixel.getAttribute("x")) -
        parseInt(toPixel.getAttribute("x")) <
      0
    ) {
      fromPixel.style.borderBottom = "none";
      toPixel.style.borderTop = "none";
    }
    if (
      parseInt(fromPixel.getAttribute("x")) -
        parseInt(toPixel.getAttribute("x")) >
      0
    ) {
      fromPixel.style.borderTop = "none";
      toPixel.style.borderBottom = "none";
    }
  };

  return (
    <>
      <div className="mazeContainer">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${size}, ${length / size}px)`,
            backgroundColor: "var( --maze-bkgnd-init)",
          }}
        >
          {pixelComponents}
        </div>
      </div>
      <div className="buttonContainer">
        <button className="mazeButton" onClick={() => generateMaze()}>
          Generate Maze
        </button>
        {/* <button
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
        </button> */}
      </div>
      {/* <p className="coords">
        {xVal >= 0 ? `${xVal}` : ``}-{yVal >= 0 ? `${yVal}` : ``}
      </p> */}
    </>
  );
});

export default Labyrinth;
