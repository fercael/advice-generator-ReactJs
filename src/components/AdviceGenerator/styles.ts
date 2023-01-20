import styled from 'styled-components';

export const Container = styled.section`
  width: 592px;
  border: 4px solid var(--blue);
  border-radius: 8px;
  padding: 2rem;
`;

export const AdviceTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gray);
`;
export const AdviceText = styled.p`
  font-size: 1.13rem;
  color: var(--light-gray);
`;
export const GenerateAdviceButton = styled.button`
  width: 384px;
  height: 2rem;

  font-size: 1.13rem;
  text-align: center;
  
  border: transparent;
  border-radius: 8px;
  
  color: var(--darkest-blue);
  background: var(--blue);

  :hover{
    cursor: pointer;
    background: var(--light-blue);
  }
`;
