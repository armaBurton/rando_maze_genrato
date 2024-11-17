//github.com/Xinecraft/react-maze-generator
import React from "react";
import "./App.css";
import TitleBlock from "./views/TitleBlock/TitleBlock";
import Labyrinth from "./views/Labyrinth/Labyrinth";

function App() {
  return (
    <main>
      <header>
        <TitleBlock />
      </header>
      <section className="mazeSection">
        <Labyrinth size={20} />
      </section>
    </main>
  );
}

export default App;
