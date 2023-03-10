import React from 'react';
import { IFlexbox } from '../../interfaces/flexbox';

import { Wrapper } from './styles';

const Flexbox: React.FC<IFlexbox> = ({
  direction,
  justify,
  align,
  gap = '2rem',
  width = '100%',
  height = '1rem',
  children
}) => {
  return (
    <Wrapper direction={direction} justify={justify} align={align} gap={gap} width={width} height={height}>
      {children}
    </Wrapper>
  )
}

export default Flexbox;