import styled from 'styled-components';

export const StyledP = styled.p`
  display: flex;
  justify-content: center;
  align-content: center;

  font-size: 40px;
  font-weight: bolder;

  gap: 5px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.colors.color1};
    background-color: ${({ theme }) => theme.colors.white};

    width: 50px;
    height: 50px;

    border-radius: 8px;
    padding: 5px;
  }
`;
