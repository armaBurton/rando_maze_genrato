import React, { useState, forwardRef, useRef } from "react";
import { timeout } from "../../utils/utils";
import { length, size, mazeBkgnd, mazeBorder } from "../../utils/utils";
import sample from "lodash/sample";
import { shuffle } from "lodash";
import MakeLabyrinth from "./MakeLabyrinth/MakeLabyrinth";
import ReturnPixel from "./ReturnPixel/ReturnPixel";
import getNeighbors from "./getNeighbors/getNeighbors";
import getUpdatedWalls from "./getUpdatedWalls/getUpdatedWalls";
import getValidPath from "./getValidPath/getValidPath";
import updateCurrentPixelState from "./updateCurrentPixelState/updateCurrentPixelState";

const Labyrinth = forwardRef(() => {
  const pixelRef = useRef({});
  const [running, setRunning] = useState(false);
  const [pixels] = useState(MakeLabyrinth());
  const [mazeCompleted, setMazeCompleted] = useState(false);

  const pixelComponents = [];

  const resetLabyrinth = async () => {
    setMazeCompleted(false);
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
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
        pixelRef.current[`${x}-${y}`].setAttribute("data-traversed", "false");
        pixelRef.current[`${x}-${y}`].setAttribute("data-validPath", "true");
        pixelRef.current[`${x}-${y}`].setAttribute(
          "data-currentPosition",
          "false",
        );
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
            x={x}
            y={y}
            top={"true"}
            bottom={"true"}
            left={"true"}
            right={"true"}
            key={`${x}-${y}`}
            visited={"false"}
            traversed={"false"}
            validPath={"true"}
            currentPosition={"false"}
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

    //reset labyrinth
    resetLabyrinth();
    await timeout(1);

    //redraw labyrinth
    renderLabyrinth();

    setRunning(true);
    const stack = [];

    //1 initial pixel
    const currentPixel = pixelRef.current["0-0"];

    //2 mark current cell as visited
    currentPixel.setAttribute("data-visited", "true");

    //3 push it to the stack
    stack.push(currentPixel);

    //4 while the stack is not empty
    while (stack.length > 0) {
      //a. pop a cell from the stack and make it a current cell
      const current = stack.pop();

      //find neighbors
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
    setMazeCompleted(true);
    setRunning(false);
  };

  const traverseLabyrinth = async () => {
    if (running) return;
    setRunning(true);
    const visited = Array.from({ length: size }, () => Array(size).fill(false));
    visited[0][0] = true;
    const path = [pixelRef.current["0-0"]];
    const pixelObj = {
      x: 0,
      y: 0,
      currentPixel: pixelRef.current["0-0"],
      size,
    };
    await updateCurrentPixelState(pixelObj.currentPixel);

    for (let i = 0; i < size; i++) {
      getValidPath(pixelRef, pixelObj, path, visited);
      console.log(`*** pixelObj.x, pixelObj.y ==> ` + pixelObj.x, pixelObj.y);
    }
    setRunning(false);
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
      <button className="mazeButton" onClick={() => generateMaze()}>
        Generate Maze
      </button>
      {mazeCompleted ? (
        <button className="mazeButton" onClick={() => traverseLabyrinth()}>
          Traverse
        </button>
      ) : (
        ""
      )}
    </>
  );
});

export default Labyrinth;
