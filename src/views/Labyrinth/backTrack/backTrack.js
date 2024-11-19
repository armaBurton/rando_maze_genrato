import getValidPath from "../getValidPath/getValidPath";

const backTrack = async (stack, visited, pixelRef, size) => {
  //   visited.forEach((v) => console.log(v));
  // const setToArray = Array.from(visited);
  // const popped = setToArray.pop();
  // console.log(setToArray[setToArray.length - 1]);
  // visited.clear();
  // visited.add(...setToArray);
  // const len = visited.length;
  console.log("stack length before pop ", stack.length)
  stack.pop();
  console.log("stack length after pop ", stack.length)
  console.log("stack after pop", stack[stack.length - 1])
  // while (stack.length > 0) {
  //   const x = parseInt(popped.getAttribute("x"));
  //   const y = parseInt(popped.getAttribute("y"));

  //   console.log(`Backtracking at (${x}, ${y})`);

  //   popped.setAttribute("data-validpath", "false");
  //   const newPath = getValidPath(popped, pixelRef, size, x, y, visited);
  //   const traversableDirections = newPath.length;

  //   if (traversableDirections > 0) {
  //     console.log(`Found new path from (${x}, ${y})`);
  //     stack.push(...newPath); // Add valid new paths back into the stack
  //     break;
  //   } else {
  //     const deadEnd = { x, y, traversableDirections: 0 };
  //     visited.add(JSON.stringify(deadEnd));
  //     await backTrack(stack, visited, pixelRef, size);
  //   }
  // }
};

export default backTrack;
