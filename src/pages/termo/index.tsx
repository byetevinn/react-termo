import Line from '../../components/line';

import { StyledDiv } from './style';

const Termo = () => {
  const linesAmount = Array(5).fill('');
  const word = 'ausio';

  return (
    <StyledDiv>
      {linesAmount.map((_, index) => (
        <Line key={index} />
      ))}
    </StyledDiv>
  );
};

export default Termo;
