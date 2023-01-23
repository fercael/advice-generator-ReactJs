import React, { useState, useEffect } from 'react';
import { AdviceProps } from '../../@types/advice';
import Flexbox from '../Flexbox';

import { AdviceText, AdviceTitle, Container, GenerateAdviceButton } from './styles';

const AdviceGenerator: React.FC = () => {
  const [advice, setAdvice] = useState<AdviceProps | null >(null);

  const findAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(data => data.json())
    .then(obj => setAdvice(obj))
  }
  useEffect(() => {
    findAdvice()
  }, [])
  
  return (
    <Container>
      <Flexbox direction='column' align='center' gap='2rem'>
        <AdviceTitle>
          {`Advice #${advice?.slip.id}`}
        </AdviceTitle>
        <AdviceText>
          {`"${advice?.slip.advice}"`}
        </AdviceText>
        <GenerateAdviceButton onClick={e => findAdvice()}>Find Advice</GenerateAdviceButton>
      </Flexbox>
    </Container>
  );
}

export default AdviceGenerator;