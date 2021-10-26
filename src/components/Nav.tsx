import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../App';

const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
`;

const NavItem = styled.li`
  padding: 10px 20px;

  > a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
  }
`;

function Nav() {
  return (
    <nav>
      <NavList>
        <NavItem>
          <Link to="/products">Products</Link>
        </NavItem>
      </NavList>
    </nav>
  );
}

export default Nav;
