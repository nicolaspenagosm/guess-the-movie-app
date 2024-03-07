import styled from "styled-components";
export const StyledMovieForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 30rem;
  gap: 0.25rem;
  min-height: 5rem;

  fieldset {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }
`;

export const ErrorMsg = styled.p`
  color: #ff5858;
  font-size: 0.75rem;
  padding-left: 0.5rem;
`;
