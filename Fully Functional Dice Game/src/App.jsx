import React, { useState } from "react";
import StartGame from "./components/StartGame/StartGame";
import PlayGame from "./components/PlayGame/PlayGame";

const App = () => {
  const [isGameStart, setGameStart] = useState(false);
  const toggleGame = () => {
    setGameStart((prev) => !prev);
  };
  return (
    <div className="app">
      {isGameStart ? <PlayGame /> : <StartGame toggle={toggleGame} />}
    </div>
  );
};

export default App;
