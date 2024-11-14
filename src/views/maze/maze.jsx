import CellGrid from "../cellGrid/cellGrid";
// import MazeGrid from "../mazeGrid/mazeGrid";

const Maze = () => {
    const size = 20;
    return (
        <div className="maze">
            {<CellGrid size={size} />}
            {/* { <MazeGrid gridSize={size}/>} */}
        </div>
        
    )

}

export default Maze;