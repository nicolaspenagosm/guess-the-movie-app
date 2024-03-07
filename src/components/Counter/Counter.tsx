import "animate.css";
import { StyledCounter } from "./Counter.styled";
import { useEffect, useState } from "react";

const ANIM_CLASS = "animate__tada";
const ANIM_DURATION = 1000;

const Counter: React.FC<{ label: string; count: number }> = ({
  label,
  count,
}) => {
  const [animClass, setAnimClass] = useState<string>("");
  useEffect(() => {
    setAnimClass(ANIM_CLASS);
    setTimeout(() => {
      setAnimClass("");
    }, ANIM_DURATION);
  }, [count]);
  return (
    <StyledCounter className={"animate__animated " + animClass}>
      <p>{label + " " + count}</p>
    </StyledCounter>
  );
};

export default Counter;
