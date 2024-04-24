import React, { useState } from "react";
import styled from "styled-components";

const RoleDice = ({ currentDice, RollDice }) => {
  return (
    <DiceContainer>
      <div className="Dice" onClick={RollDice}>
        <img src={`/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;
const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 48px 0 48px;
  p {
    font-size: 24px;
    margin: 0 0 20px 0;
    line-height: 20px;
  }
  .Dice {
    cursor: pointer;
    margin-bottom: 0px;
  }
`;
