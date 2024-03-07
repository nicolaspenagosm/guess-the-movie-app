import { useState } from "react";

const useInput = (isValueValid: (str:string)=>boolean) => {
    const [value, setValue] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(false);
    const [isTouched, setIsTouched] = useState<boolean>(false);

    const hasError = isTouched && !isValid;

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const enteredValue = e.target.value;
        setValue(enteredValue);
        setIsValid(isValueValid(enteredValue));
    }

    const blurHandler = () => {
        setIsTouched(true);
    }

    const clearInput = () => {
        setIsTouched(false);
        setIsValid(false);
        setValue("");
    }

    return {
        value,
        hasError,
        isValid,
        changeHandler,
        blurHandler,
        clearInput
    }

}

export default useInput;