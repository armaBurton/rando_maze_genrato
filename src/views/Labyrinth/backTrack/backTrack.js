import getValidPath from "../getValidPath/getValidPath";

const backTrack = async (stack, visited, pixelRef, size) => {
  while (stack.length > 0) {
    const popped = stack.pop();
    const x = parseInt(popped.getAttribute("x"));
    const y = parseInt(popped.getAttribute("y"));

    popped.setAttribute("data-validpath", "false");
    const newPath = getValidPath(popped, pixelRef, size, x, y, visited);
    if (newPath.length > 0) {
      console.log(`Found new path from (${x}, ${y})`);
      stack.push(...newPath); // Add valid new paths back into the stack
      break;
    }
  }
};

export default backTrack;
