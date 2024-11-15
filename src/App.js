//github.com/Xinecraft/react-maze-generator
import React from "react";
import "./App.css";
// import Maze from './views/maze/maze';
import TitleBlock from "./views/titleBlock/titleBlock";
import CellGrid from "./views/CellGrid/CellGrid";

function App() {
  return (
    <main>
      <header>
        <TitleBlock />
      </header>
      <section className="mazeSection">
        <CellGrid size={20} />

        {/* <Maze />   */}
      </section>
    </main>
  );
}

export default App;
