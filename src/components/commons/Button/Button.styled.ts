import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #5ad257;
  height: 2.5rem;
  padding: 0 2rem 0 2rem;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  color: white;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  
  &:hover {
    background-color: #4baf49;
    &:disabled {
      background-color: #5ad257;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
