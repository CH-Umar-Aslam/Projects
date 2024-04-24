import React, { useState } from "react";
import TotalScore from "../TotalScore";
import NumberSelector from "../NumberSelector";
import { styled } from "styled-components";
import RoleDice from "../RoleDice";
import { Button } from "../../styled/Button";
import { OutlineButton } from "../../styled/Button";
import Rules from "../Rules";

const PlayGame = () => {
  const [error, setError] = useState("");
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState(false);

  const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const RollDice = () => {
    const randomNumber = generateRandomNum(1, 7);

    setCurrentDice((prev) => randomNumber);
    if (!selectedNumber) {
      setError("You have'nt selected any number");
      return;
    }

    if (randomNumber === selectedNumber) {
      setScore((prev) => randomNumber + prev);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <Maincontainer>
      <div className="topSection">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RoleDice RollDice={RollDice} currentDice={currentDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide " : "Show "}Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </Maincontainer>
  );
};

export default PlayGame;
const Maincontainer = styled.main`
  .topSection {
    box-sizing: border-box;
    margin: 20px 100px 0 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btns {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 40px 0 30px 0;
  }
`;
