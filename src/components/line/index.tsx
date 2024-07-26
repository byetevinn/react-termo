import { StyledP } from './style';

const Line = () => {
  return (
    <StyledP>
      {'Linha'
        .toUpperCase()
        .split('')
        .map((letter) => (
          <span> {letter} </span>
        ))}
    </StyledP>
  );
};

export default Line;
