import React from 'react';

import { Container, Wrapper } from './styles';
import Product from '../Product'

function Layout() {
  return (
    <Container>
      <Wrapper>
        <Product />
      </Wrapper>
    </Container>
  );
};

export default Layout;
