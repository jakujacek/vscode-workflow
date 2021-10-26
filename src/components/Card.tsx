import React from 'react';
import styled from 'styled-components';

const CardItem = styled.div`
  width: 100%;
  max-width: 80vw;
  padding: 20px 50px;
  border-radius: 5px;
  background-color: #32324e;
  margin: 0 auto;

  span,
  p,
  h1,
  h3 {
    color: white;
  }

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }

  .command {
    color: lime;
  }

  .box {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    width: 140px;
    height: 140px;
    background-color: fuchsia;
    color: white;
    margin: 10px;
  }
`;

export interface CardProps {
  children: JSX.Element[] | JSX.Element;
}

function Card(props: CardProps) {
  return <CardItem>{props.children}</CardItem>;
}

export default Card;