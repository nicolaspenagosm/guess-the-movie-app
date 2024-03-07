import { StyledButton } from "./Button.styled";

interface ChildrenProps {
  children: React.ReactNode;
  disabled: boolean;
}

const Button: React.FC<ChildrenProps> = ({ children, disabled }) => {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
};

export default Button;
