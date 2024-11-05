// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <p>&copy; 2024 Carlos González. Todos los derechos reservados.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

export default Footer;
