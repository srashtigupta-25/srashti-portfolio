import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  background: #f8f9fa;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const AboutText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  padding: 1rem;

  p {
    margin-bottom: 1.5rem;
  }
`;

const Highlight = styled.span`
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
`;

const ProfileImage = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: white;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 50px rgba(0,0,0,0.2);
  }
`;

const About = ({ onProfileClick }) => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutText>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Highlight>Senior Software Developer</Highlight> with 5 years of experience 
            building robust backend systems using Java, Spring Boot, and microservices architecture. 
            My journey in tech has been electrifying, just like my personality!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Currently pursuing my <Highlight>Master's in Computer Science</Highlight> at Northeastern University, 
            Enhancing technical knowledge while preserving high standards for code craftsmanship. 
            Dedicated to building solutions that create real impact.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <strong>Looking for Summer 2026 Internship Opportunities!</strong> 
            Ready to bring my electric energy and technical expertise to your team.
          </motion.p>
        </AboutText>
        <ProfileImage
          onClick={onProfileClick}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⚡
        </ProfileImage>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
