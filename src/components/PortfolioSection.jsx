// src/components/PortfolioSection.jsx
import React from 'react';
import styled from 'styled-components';

const PortfolioSection = () => {
  return (
    <Portfolio id="portfolio">
      <h2>Mi Portafolio</h2>
      <Projects>
        <Project>Proyecto 1</Project>
        <Project>Proyecto 2</Project>
        <Project>Proyecto 3</Project>
      </Projects>
    </Portfolio>
  );
};

const Portfolio = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #f5f5f5;
`;

const Projects = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Project = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PortfolioSection;
