import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({ selectedNumber, setSelectedNumber, error, setError }) => {
  const arrnumber = [1, 2, 3, 4, 5, 6];

  const numberSlecterHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumSelector>
      <p className="error">{error}</p>
      <div className="flex">
        {arrnumber.map((value, i) => (
          <Box
            isselected={value == selectedNumber}
            key={i}
            onClick={() => numberSlecterHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumSelector>
  );
};

export default NumberSelector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;

const NumSelector = styled.div`
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
    font-weight: 400;
    font-size: 18px;
  }
`;
const rightSection = styled.div`
  display: flex;
  /* flex-direction: column;  */
  //   .flex {
  //     font-size: 54px;
  //     background-color: rebeccapurple;
  //   }
  //
`;
