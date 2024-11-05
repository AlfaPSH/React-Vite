// src/components/HeroSection.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Hero>
      <Content>
        <Title animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
          Bienvenido a Mi Portafolio
        </Title>
        <Subtitle animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5, duration: 1 }}>
          Soy Carlos, desarrollador web y pentester.
        </Subtitle>
      </Content>
    </Hero>
  );
};

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #007bff;
  color: white;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Subtitle = styled(motion.h2)`
  font-size: 24px;
`;

export default HeroSection;
