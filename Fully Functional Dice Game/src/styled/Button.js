import { styled } from "styled-components";

export const Button = styled.button`
  padding: 9px 19px;
  background-color: black;
  min-width: 220px;
  border: 1px solid black;
  color: white;
  cursor: pointer;
  transition: 0.5s background ease-in;
  font-weight: 500;
  font-size: 18px;
  border-radius: 7px;
  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
 background-color: white;
 color: black;
&:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.3s background ease-in;
  }
`;
