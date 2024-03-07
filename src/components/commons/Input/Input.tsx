import { StyledInput } from "./Input.styled";

interface IInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  value: string;
  placeholder: string;
  hasError:boolean
}
export const Input: React.FC<IInputProps> = ({
  onChange,
  onBlur,
  value,
  placeholder,
  hasError
}) => {
  return (
    <StyledInput
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
      $hasError={hasError}
    ></StyledInput>
  );
};

export default Input;
