import styled from "styled-components";

export const StyledApp = styled.main<{ $bgColor: string }>`
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ $bgColor }) => $bgColor};
  gap: 2rem;
  align-items: center;
  justify-content: center;
  transition: background-color 100ms ease-out;
`;

export const H1 = styled.h1`
  color: #ffac41;
  font-size: 3rem;
`;

export const CounterContainer = styled.div<{ dir: "left" | "right" }>`
  position: absolute;
  top: 1rem;
  left: ${({ dir }) => (dir === "left" ? "1rem" : "auto")};
  right: ${({ dir }) => (dir === "right" ? "1rem" : "auto")};
`;
