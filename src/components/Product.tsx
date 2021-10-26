import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface ProductData {
  id: string;
  name: string;
  price: string;
  image: string;
  link: string;
  inStock: number;
  description: string;
}

const StyledLink = styled(Link)`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ProductStyle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.2);
  background-color: white;
  transition: transform 0.17s ease-in-out;
  cursor: pointer;
  transform-origin: 0 0;

  &:hover {
    transform: scale(1.13) rotate(5deg);
    z-index: 1;
  }

  > img {
    width: 100%;
    max-width: 100%;
  }

  > div {
    padding: 10px 20px;
  }
`;

function Product(props: ProductData) {
  return (
    <ProductStyle>
      <StyledLink to={'product-details/' + props.id} />
      <img src={props.image} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
      </div>
    </ProductStyle>
  );
}

export default Product;
