import React from "react";
import { styled } from "styled-components";
const Rules = () => {
  return (
    <RuleContainer>
      <h2>How to Play game</h2>
      <div className="text">
        <p>Select any Number</p>
        <p>Clcik on dice image</p>
        <p>
          After click on dice if selected number is equal to dice number you will get same
          point as dice{" "}
        </p>
        <p>If you get wrong guess then 2 points will be deducted</p>
      </div>
    </RuleContainer>
  );
};

export default Rules;
const RuleContainer = styled.div`
  background-color: #fbf1f1;
  padding: 15px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 0;
  }
  .text {
    margin-top: 14px;
  }
  p {
    font-size: 20px;
    line-height: 5px;
  }
`;
