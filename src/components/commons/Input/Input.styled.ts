import styled from "styled-components";

export const StyledInput = styled.input<{ $hasError: boolean }>`
  width: 100%;
  min-height: 2.5rem;
  border-radius: 2rem;
  border: 2px solid;
  padding: 0 1rem 0 1rem;
  &:focus {
    outline: none;
  }

  border-color: ${({ $hasError }) => ($hasError ? "#FF5858" : "transparent")};
`;
