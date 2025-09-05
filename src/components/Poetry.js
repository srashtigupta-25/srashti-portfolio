import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PoetryContainer = styled.div`
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 30px;
  margin: 2rem;
  box-shadow: 0 10px 30px rgba(255, 215, 0, 0.2);

  @media (max-width: 768px) {
    margin: 1rem;
    padding: 2rem 1.5rem;
    border-radius: 20px;
  }
`;

const PoetryContent = styled(motion.div)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-style: italic;
  }
`;

const InstagramLink = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: #FFD700;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  }
`;

const Poetry = () => {
  return (
    <PoetryContainer>
      <PoetryContent
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>⚡ When Code Meets Poetry ⚡</h3>
        <p>
          "In the silence of midnight,<br />
          Where algorithms dance with dreams,<br />
          I find my rhythm in the rhythm of code,<br />
          And my soul in the spaces between."
        </p>
        <p>
          Beyond the world of Java and Spring Boot, I'm a passionate poet who finds beauty in words. 
          My Instagram is where I share my creative journey, blending the technical with the artistic.
        </p>
        <InstagramLink
          href="https://instagram.com/invidioustart"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-instagram"></i> Follow My Poetry Journey
        </InstagramLink>
      </PoetryContent>
    </PoetryContainer>
  );
};

export default Poetry;
