import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import Components
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Education from './components/Education';
import Community from './components/Community';
import Poetry from './components/Poetry';
import Contact from './components/Contact';

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  * {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Lightning Animation */
  @keyframes lightning {
    0%, 90%, 100% { opacity: 0; transform: scaleY(0); }
    5%, 10% { opacity: 1; transform: scaleY(1); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Styled Components
const LightningContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const LightningBolt = styled.div`
  position: absolute;
  width: 4px;
  height: 100px;
  background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
  opacity: 0;
  animation: lightning 3s infinite;
  
  &:nth-child(1) { left: 20%; animation-delay: 0s; }
  &:nth-child(2) { left: 40%; animation-delay: 1s; }
  &:nth-child(3) { left: 60%; animation-delay: 2s; }
  &:nth-child(4) { left: 80%; animation-delay: 0.5s; }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #FFD700;
  }
`;

const Hero = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #87CEEB 100%);
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 10;
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: white;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  color: white;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: #FFD700;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
  font-size: 3rem;

  &:nth-child(1) {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    top: 60%;
    right: 10%;
    animation-delay: 2s;
  }

  &:nth-child(3) {
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
  }
`;

const Section = styled.section`
  padding: 3rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

// Skills Modal Components
const SkillsModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const SkillsModalContent = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

const CloseModal = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
`;

const SkillBar = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const SkillProgress = styled.div`
  height: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const SkillFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  border-radius: 10px;
  position: relative;

  &::after {
    content: '⚡';
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 0.8rem;
  }
`;

// Main App Component
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSkillsModal = () => setIsSkillsModalOpen(true);
  const closeSkillsModal = () => setIsSkillsModalOpen(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Java', percentage: 95 },
    { name: 'Spring Boot', percentage: 90 },
    { name: 'Microservices', percentage: 88 },
    { name: 'REST APIs', percentage: 92 },
    { name: 'MySQL', percentage: 85 },
    { name: 'Docker', percentage: 80 },
    { name: 'AWS', percentage: 70 },
    { name: 'Kubernetes', percentage: 70 }
  ];

  return (
    <>
      <GlobalStyle />
      
      {/* Lightning Effects */}
      <LightningContainer>
        <LightningBolt />
        <LightningBolt />
        <LightningBolt />
        <LightningBolt />
      </LightningContainer>

      {/* Navigation */}
      <Nav scrolled={scrolled}>
        <NavContainer>
          <Logo>⚡ Srashti</Logo>
          <NavLinks>
            <li><NavLink onClick={() => scrollToSection('about')}>About</NavLink></li>
            <li><NavLink onClick={() => scrollToSection('experience')}>Experience</NavLink></li>
            <li><NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink></li>
            <li><NavLink onClick={() => scrollToSection('leadership')}>Leadership</NavLink></li>
            <li><NavLink onClick={() => scrollToSection('awards')}>Awards</NavLink></li>
            <li><NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink></li>
            <li><NavLink onClick={() => scrollToSection('education')}>Education</NavLink></li>
            <li><NavLink onClick={() => scrollToSection('community')}>Community</NavLink></li>
            <li><NavLink onClick={() => scrollToSection('poetry')}>Poetry</NavLink></li>
            <li><NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink></li>
          </NavLinks>
        </NavContainer>
      </Nav>

      {/* Hero Section */}
      <Hero>
        <FloatingElement>⚡</FloatingElement>
        <FloatingElement>💻</FloatingElement>
        <FloatingElement>📝</FloatingElement>
        
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm Srashti!
          </HeroTitle>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Senior Software Developer & Creative Soul
          </Subtitle>
          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            ⚡ 5 years of electrifying experience in Java, Spring Boot, and Microservices<br />
            🎓 MS in Computer Science at Northeastern University | Seeking Summer 2026 Internships
          </Description>
          <CTAButton
            onClick={() => scrollToSection('contact')}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect! ⚡
          </CTAButton>
        </HeroContent>
      </Hero>

      {/* Skills Modal */}
      <AnimatePresence>
        {isSkillsModalOpen && (
          <SkillsModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSkillsModal}
          >
            <SkillsModalContent onClick={(e) => e.stopPropagation()}>
              <CloseModal onClick={closeSkillsModal}>&times;</CloseModal>
              <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#FFD700' }}>
                ⚡ Skill Levels ⚡
              </h2>
              {skills.map((skill, index) => (
                <SkillBar key={skill.name}>
                  <SkillLabel>
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </SkillLabel>
                  <SkillProgress>
                    <SkillFill
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 2, delay: index * 0.1 }}
                    />
                  </SkillProgress>
                </SkillBar>
              ))}
            </SkillsModalContent>
          </SkillsModal>
        )}
      </AnimatePresence>

      {/* About Section */}
      <Section id="about">
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </SectionTitle>
        <About onProfileClick={openSkillsModal} />
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </SectionTitle>
        <Experience />
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects ⚡
        </SectionTitle>
        <Projects />
      </Section>

      {/* Leadership Section */}
      <Section id="leadership">
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Leadership & Mentorship ⚡
        </SectionTitle>
        <Leadership />
      </Section>

      {/* Awards Section */}
      <Section id="awards">
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Recognition & Awards 🏆
        </SectionTitle>
        <Awards />
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Arsenal ⚡
        </SectionTitle>
        <Skills />
      </Section>

      {/* Education Section */}
      <Section id="education">
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </SectionTitle>
        <Education />
      </Section>

      {/* Community Section */}
      <Section id="community">
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Community Involvement 🌱
        </SectionTitle>
        <Community />
      </Section>

      {/* Poetry Section */}
      <Section id="poetry">
        <Poetry />
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <Contact />
      </Section>
    </>
  );
}

export default App;
