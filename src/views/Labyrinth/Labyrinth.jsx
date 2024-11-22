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
import visitedButStillValid from "./visitedButStillValid/visitedButStillValid";
import backTrack from "./backTrack/backTrack";

// import setCurrentPositionAttributes from "./setCurrentPositionAttributes/setCurrentPositionAttributes";
// import getUnvisitedNeighbors from "./getUnvisitedNeighbors/getUnvisitedNeighbors";

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
        // console.log("resetLabyrinth: ", pixelRef.current[`${x}-${y}`].style);
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

    // console.log("generating maze");
    setRunning(true);
    const stack = [];

    //1 initial pixel
    // console.log("generateMaze");
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
    const visited = Array.from({ length: size }, () => Array(size).fill(false));
    const path = [];
    let x = 0;
    let y = 0;

    getValidPath(pixelRef, visited, path, size, x, y);

    // directions.forEach(({ dx, dy, border }) => {
    //   const newX = x + dx;
    //   const newY = y + dy;
    //   const oldKey = `${x}-${y}`;
    //   const key = `${newX}-${newY}`;
    //   const oldPixel = pixelRef.current[oldKey];
    //   const pixel = pixelRef.current[key];
    //   if (newX >= 0 && newX < size && newY >= 0 && newY < size) {
    //     const oldBottom = oldPixel.style.borderBottom;
    //     const bottom = pixel.style.borderBottom;
    //     console.log("*** -25 -getValidPath.js *** oldBottom ==> ", oldBottom);
    //     console.log("*** -25 -getValidPath.js *** bottom ==> ", bottom);
    //   }

    // }
    //   if (pixel && pixel.styles[border] === "none") {
    //     console.log(
    //       '*** -24 -getValidPath.js *** pixelRef.current["0-0"].style ==> ',
    //       pixelRef.current[key]?.style?.[border],
    //       border,
    //     );
    // path.push(pixelRef.current[key]);
    //   }
    // } else {
    //   console.error("out of bounds");
    // console.log(path);
    // const visitedStack = [pixelRef.current["0-0"]];
    // const visitedSet = new Set();

    // while (visitedStack.length > 0) {
    //   const currentPixel = visitedStack.pop();
    //   const x = parseInt(currentPixel.getAttribute("x"));
    //   const y = parseInt(currentPixel.getAttribute("y"));
    //   const currentKey = `${x}-${y}`;

    //   console.log(currentKey);
    //   console.log(currentPixel);

    //   if (visitedSet.has(currentKey)) continue;

    //   visitedSet.add(currentKey);

    //   updateCurrentPixelState(currentPixel);
    //   //update current pixel div
    //   //shows position on the labyrinth
    //   if (parseInt(currentPixel.getAttribute("data-exits")) > 0) {
    //     const exits = parseInt(currentPixel.getAttribute("data-exits")) - 1;
    //     currentPixel.setAttribute("data-exits", exits);
    //   }
    //   // visitedStack.push(currentPixel);

    //   //get valid exits
    //   const validPaths = getValidPath(
    //     currentPixel,
    //     pixelRef,
    //     size,
    //     x,
    //     y,
    //     visitedSet,
    //   );
    //   validPaths.forEach((vp) => visitedStack.push(vp));

    //   // if (validPaths.length > 0) {
    //   //   validPaths.map((vp) => {
    //   //     visitedStack.push(vp);
    //   //     controlStack.push(vp);
    //   //   })
    //   // }
    //   console.log(visitedStack.length);
    //   visitedButStillValid(currentPixel);
    // }
  };

  // const traverseLabyrinthx = async () => {
  //   const stack = [pixelRef.current["0-0"]];
  //   const controlStack = [pixelRef.current["0-0"]]
  //   const visited = new Set();
  //   const startPixel = { x: 0, y: 0, traversableDirections: 1 };
  //   visited.add(JSON.stringify(startPixel));

  //   console.log("start stack: ", stack[0])
  //   while (stack.length > 0) {
  //     //pop off from the stack !!!!!!!!!!!!!!!!!!!1
  //     const currentPixel = stack.pop();
  //     const x = parseInt(currentPixel.getAttribute("x"));
  //     const y = parseInt(currentPixel.getAttribute("y"));

  //     // console.log(`Visiting: (${x}, ${y})`);

  //     updateCurrentPixelState(currentPixel);

  //     if (x === size - 1 && y === size - 1) {
  //       alert("exit found");
  //       break;
  //     }
  //     stack.push(currentPixel)
  //     visited.add(`${x}-${y}`);

  //     const newPath = getValidPath(currentPixel, pixelRef, size, x, y, visited);
  //     console.log("valid Path length ", newPath.length);
  //     // console.log(currentPixel)

  //     if (newPath.length === 0) {
  //       console.log(`Dead End at: [${x}-${y}]`);
  //       currentPixel.setAttribute("data-validpath", "false");
  //       const deadEndPixel = { x, y, traversableDirections: 0 };
  //       console.log(stack);
  //       visited.add(JSON.stringify(deadEndPixel));
  //       console.log("stack before backtrack ", stack.length)
  //       await backTrack(stack, visited, pixelRef, size);
  //     } else {
  //       const traversableDirections = newPath.length;
  //       const currentPixel = { x, y, traversableDirections };
  //       visited.add(JSON.stringify(currentPixel));
  //       // const randomDirection =
  //       //   newPath[Math.floor(Math.random() * newPath.length)];
  //       // newPath.forEach((np) => {
  //       //   console.log(np.getAttribute("data-validpath"));
  //       //   stack.push(np);
  //       // });
  //       const selectedPath = newPath[0];

  //       // const selectedX = parseInt(selectedPath.getAttribute("x"));
  //       // const selectedY = parseInt(selectedPath.getAttribute("y"));
  //       stack.push(selectedPath);

  //       selectedPath.setAttribute("data-validpath", "true");
  //     }
  //   }
  // };

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
      {/* <p className="coords">
        {xVal >= 0 ? `${xVal}` : ``}-{yVal >= 0 ? `${yVal}` : ``}
      </p> */}
    </>
  );
});

export default Labyrinth;
