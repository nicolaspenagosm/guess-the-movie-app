import { StyledMovieTitle } from "./MovieTitle.styled";

const MovieTitle: React.FC<{ movieEmojis: string }> = ({ movieEmojis }) => (
  <StyledMovieTitle>{movieEmojis}</StyledMovieTitle>
);

export default MovieTitle;
