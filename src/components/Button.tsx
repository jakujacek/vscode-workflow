import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: white;
  border: 2px solid black;
  padding: 20px 0;
  min-width: 230px;
  text-transform: uppercase;
`;

function Button({ text, click }: { text: string; click: () => void }) {
  return <StyledButton onClick={click}>{text}</StyledButton>;
}

export default Button;
