import styled from "styled-components";
const TotalScore = ({ score, error }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;
const ScoreContainer = styled.div`
  text-align: center;
  max-width: 200px;
  line-height: normal;
  /* background-color: rebeccapurple; */
  h1 {
    font-family: Poppins;
    font-size: 100px;
    line-height: 100px;
    margin: 0 0;
  }
  p {
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    margin: 0 0;
  }
`;
