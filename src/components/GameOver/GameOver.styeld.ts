import styled from "styled-components";

export const StyledGameOver = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: 1;
  h1 {
    color: #ff0000;
    font-size: 3rem;
  }
`;
