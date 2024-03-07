import { useState } from "react";
import { CounterContainer, StyledApp } from "./App.styled";
import { H1 } from "./App.styled";
import MovieForm from "./components/MovieForm";
import MovieTitle from "./components/MovieTitle";
import { movies } from "../data/movies";
import Counter from "./components/Counter";

const getRandomInt = (max: number, previous?: number) => {
  let random = Math.floor(Math.random() * (max + 1));
  if (random === previous) {
    if (random + 1 <= max) random++;
    else if (random - 1 >= 0) random--;
  }
  return random;
};

const BG_COLORS = {
  default: "#252525",
  correct: "#14613d",
  incorrect: "#5e1818",
};

const ANIM_DURATION = 100;

function App() {
  const [index, setIndex] = useState(getRandomInt(movies.length - 1));
  const { name, emoji } = movies[index];
  const [bgColor, setBgColor] = useState<string>(BG_COLORS.default);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

  const triggerAnim = (color: string) => {
    setBgColor(color);
    setTimeout(() => {
      setBgColor(BG_COLORS.default);
    }, ANIM_DURATION);
  };

  const isCorrect = (enteredName: string) => {
    const matches = name.toLowerCase() === enteredName.toLowerCase();
    let color = BG_COLORS.incorrect;

    if (matches) {
      setScore((prev) => prev + 1);
      color = BG_COLORS.correct;
    } else {
      if (lives === 1) resetGame();
      else
        setLives((prev) => {
          return prev - 1;
        });
    }
    triggerAnim(color);
    setIndex((prev) => getRandomInt(movies.length - 1, prev));
    return matches;
  };

  const resetGame = () => {
    setLives(3);
    setScore(0);
  };

  return (
    <StyledApp $bgColor={bgColor}>
      <CounterContainer dir="left">
        <Counter label="Score" count={score} />
      </CounterContainer>
      <CounterContainer dir="right">
        <Counter label="Lives" count={lives} />
      </CounterContainer>
      <H1>Guess the movie</H1>
      <MovieTitle movieEmojis={emoji} />
      <MovieForm isCorrect={isCorrect} />
    </StyledApp>
  );
}

export default App;
