import React from 'react';

import tShirtImage from '../../assets/tshirt.png'

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

function Product() {
  return (
    <Container>
      <Row>
        <a href='#'>Compartilhar</a>
        <a href='#'>Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt='T-Shirt' src={tShirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ProductAction/>
          <SellerInfo/> */}

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>
  </Section>
)

const Info = () => (
  <Description>
    <h1>Descrição</h1>
    <p>It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using 'Content here, content here', making it
      look like readable English.
      <br />
      <br />
      Itens inclusos: <br />
      -1x LED <br />
      -1x LED <br />
      -1x LED <br />
      -1x LED <br />
      -1x LED <br />
      <br />

      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of
      etters, as opposed to using 'Content here, content here', making it look
      like readable English.
    </p>
  </Description>
)

export default Product;
