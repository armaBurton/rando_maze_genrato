import getValidPath from "../getValidPath/getValidPath";

const backTrack = async (stack, visited, pixelRef, size) => {
  while (stack.length > 0) {
    const popped = stack.pop();
    const x = parseInt(popped.getAttribute("x"));
    const y = parseInt(popped.getAttribute("y"));

    console.log(`Backtracking at (${x}, ${y})`);

    popped.setAttribute("data-validpath", "false");
    const newPath = getValidPath(popped, pixelRef, size, x, y, visited);
    const traversableDirections = newPath.length;

    if (traversableDirections > 0) {
      console.log(`Found new path from (${x}, ${y})`);
      stack.push(...newPath); // Add valid new paths back into the stack
      break;
    } else {
      const deadEnd = { x, y, traversableDirections: 0 };
      visited.add(JSON.stringify(deadEnd));
      await backTrack(stack, visited, pixelRef, size);
    }
  }
};

export default backTrack;
