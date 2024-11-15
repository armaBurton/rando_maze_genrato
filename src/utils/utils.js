export const changeBgColor = (
    divRef,
    lastGrid,
    setLastGrid,
    size,
    setXVal,
    setYVal,
) => {
    const x = randoNumbo(size);
    const y = randoNumbo(size);

    const r = randoNumbo(256);
    const g = randoNumbo(256);
    const b = randoNumbo(256);
    if (lastGrid) {
        const lastDiv = divRef.current[lastGrid];
        // console.log(`${lastGrid.x}, ${lastGrid.y}`);
        // console.log(JSON.stringify(lastDiv))
        lastDiv.style.backgroundColor = "yellow";
    }
    const selectedDiv = divRef.current[`${x}-${y}`];
    if (selectedDiv) {
        selectedDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
        console.log("div not found");
    }
    setLastGrid(`${x}-${y}`);
    setXVal(x);
    setYVal(y);
};

export const randoNumbo = (size) => {
    return Math.floor(Math.random() * (size - 1));
};

export const timeout = (time) => {
    return new Promise((res) => setTimeout(res, time));
};

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// const ToggleWalls = (x, y, divRef, walls) => {
//   const [theseWalls, setTheseWalls] = useState({ ...walls });
//   //   setBorders({ ...walls });
//   const selectedDiv = divRef.current[`${x}-${y}`];
//   selectedDiv.style.borderTop = theseWalls.top;
//   selectedDiv.style.borderBottom = theseWalls.bottom;
//   selectedDiv.style.borderLeft = theseWalls.left;
//   selectedDiv.style.borderRight = theseWalls.right;
// };
