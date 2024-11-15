//github.com/Xinecraft/react-maze-generator
import React from "react";
import "./App.css";
import TitleBlock from "./views/TitleBlock/TitleBlock";
// import CellGrid from "./views/CellGrid/CellGrid";
import Labyrinth from "./views/Labyrinth/Labyrinth";

function App() {
  return (
    <main>
      <header>
        <TitleBlock />
      </header>
      <section className="mazeSection">
        {/* <CellGrid size={20} /> */}
        <Labyrinth sizeX={20} sizeY={20} />
      </section>
    </main>
  );
}

export default App;
