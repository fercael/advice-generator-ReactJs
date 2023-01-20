import React, { useState, useEffect } from 'react';
import { generateAdvice } from '../../functions';
import Flexbox from '../Flexbox';

import { AdviceText, AdviceTitle, Container, GenerateAdviceButton } from './styles';

const AdviceGenerator: React.FC = () => {
  const [ title, setTitle ] = useState('000')
  const [ advice, setAdvice ] = useState('undefined')

  useEffect(() => {
    
  }, [])
  
  return (
    <Container>
      <Flexbox direction='column' align='center' gap='2rem'>
        <AdviceTitle>
          {`Advice #${title}`}
        </AdviceTitle>
        <AdviceText>
          {`${advice}`}
        </AdviceText>
        <GenerateAdviceButton>Find Advice</GenerateAdviceButton>
      </Flexbox>
    </Container>
  );
}

export default AdviceGenerator;