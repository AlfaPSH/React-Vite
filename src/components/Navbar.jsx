// src/components/Navbar.jsx
import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>MiPortafolio</Logo>
      <NavLinks>
        <a href="#home">Inicio</a>
        <a href="#portfolio">Portafolio</a>
        <a href="#contact">Contacto</a>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const NavLinks = styled.div`
  a {
    margin: 0 10px;
    font-size: 18px;
    color: #fff;
    transition: color 0.3s;

    &:hover {
      color: #aaa;
    }
  }
`;

export default Navbar;
