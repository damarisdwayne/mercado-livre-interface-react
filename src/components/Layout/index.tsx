import React from 'react';

import Product from '../Product'
import Header from '../Header'
import Footer from '../Footer'

import { Container, Wrapper } from './styles';

function Layout() {
  return (
    <Container>
      <Header />

      <Wrapper>
        <Product />
      </Wrapper>
      
      <Footer />
    </Container>
  );
};

export default Layout;
