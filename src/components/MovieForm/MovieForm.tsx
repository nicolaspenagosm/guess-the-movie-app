import { FormEvent } from "react";
import useInput from "../../hooks/useInput";
import Button from "../commons/Button";
import Input from "../commons/Input";
import { ErrorMsg, StyledMovieForm } from "./MovieForm.styled";

const isNotEmpty = (str: string) => str !== "";

const MovieForm: React.FC<{ isCorrect: (enteredName: string) => boolean }> = ({
  isCorrect,
}) => {
  const { blurHandler, changeHandler, clearInput, value, hasError, isValid} =
    useInput(isNotEmpty);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCorrect(value)) clearInput();
    
  };

  return (
    <StyledMovieForm onSubmit={onSubmitHandler}>
      <fieldset>
        <Input
          onChange={changeHandler}
          onBlur={blurHandler}
          value={value}
          placeholder="E.g. Titanic"
          hasError={hasError}
        />
        <Button disabled={!isValid}>Send</Button>
      </fieldset>
      {hasError && <ErrorMsg>* This field is required</ErrorMsg>}
    </StyledMovieForm>
  );
};

export default MovieForm;
