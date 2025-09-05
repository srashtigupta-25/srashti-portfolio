import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceContainer = styled.div`
  background: white;
  position: relative;
  min-height: 600px;
`;

const CardStack = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 500px;
`;

const NavigationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  padding: 1rem;
`;

const NavButton = styled(motion.button)`
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const CardIndicator = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const IndicatorDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? '#FFD700' : '#e0e0e0'};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const CardCounter = styled.div`
  color: #666;
  font-weight: 600;
  font-size: 0.9rem;
`;

const ExperienceCard = styled(motion.div)`
  position: absolute;
  width: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
  border-radius: 20px;
  border-left: 5px solid #FFD700;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    z-index: 10;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 600;
  }

  .company {
    color: #FFD700;
    font-weight: 700;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  .duration {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    margin-bottom: 0.8rem;
    position: relative;
    padding-left: 1.5rem;
    font-size: 0.95rem;
    line-height: 1.5;

    &:before {
      content: "⚡";
      position: absolute;
      left: 0;
      color: #FFD700;
      font-size: 0.8rem;
    }
  }

  .card-number {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: linear-gradient(45deg, #FFD700, #FFA500);
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.9rem;
  }
`;

const Experience = () => {
  const [currentCard, setCurrentCard] = useState(0);
  
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "NAB (National Australian Bank)",
      duration: "2022 - 2025",
      achievements: [
        "Led development of critical banking microservices using Java and Spring Boot",
        "Architected scalable payment processing systems handling millions of transactions",
        "Implemented robust security measures and compliance protocols for financial data",
        "Collaborated with cross-functional teams to deliver high-availability banking solutions",
        "Mentored junior developers and established coding best practices",
        "Optimized system performance resulting in 40% faster transaction processing"
      ]
    },
    {
      title: "Software Engineer",
      company: "IBM",
      duration: "2020 - 2022",
      achievements: [
        "Developed enterprise-grade applications using Java, Spring Boot, and microservices",
        "Designed and implemented RESTful APIs for cloud-based solutions",
        "Worked with IBM Cloud platform and containerization technologies (Docker, Kubernetes)",
        "Participated in agile development processes and CI/CD pipeline implementation",
        "Contributed to open-source projects and internal tooling development",
        "Collaborated with global teams across different time zones"
      ]
    },
    {
      title: "Junior Software Developer",
      company: "Altran (Now Capgemini Engineering)",
      duration: "2019 - 2020",
      achievements: [
        "Started my professional journey developing Java-based applications",
        "Gained hands-on experience with Spring Framework and database technologies",
        "Worked on client projects involving backend system development",
        "Learned software engineering best practices and design patterns",
        "Contributed to team code reviews and documentation",
        "Built foundation in enterprise software development methodologies"
      ]
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % experiences.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const goToCard = (index) => {
    setCurrentCard(index);
  };

  return (
    <ExperienceContainer>
      <CardStack>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.3,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            style={{
              transform: `translateY(${Math.abs(index - currentCard) * 15}px) translateZ(${-Math.abs(index - currentCard) * 10}px)`,
              zIndex: experiences.length - Math.abs(index - currentCard),
              opacity: Math.abs(index - currentCard) <= 1 ? 1 : 0.3
            }}
            whileHover={{
              y: -20,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="card-number">{index + 1}</div>
            <h3>{exp.title}</h3>
            <div className="company">{exp.company}</div>
            <div className="duration">{exp.duration}</div>
            <ul>
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </ExperienceCard>
        ))}
      </CardStack>
      
      <NavigationControls>
        <NavButton
          onClick={prevCard}
          disabled={currentCard === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </NavButton>
        
        <CardIndicator>
          {experiences.map((_, index) => (
            <IndicatorDot
              key={index}
              active={index === currentCard}
              onClick={() => goToCard(index)}
            />
          ))}
        </CardIndicator>
        
        <CardCounter>
          {currentCard + 1} / {experiences.length}
        </CardCounter>
        
        <NavButton
          onClick={nextCard}
          disabled={currentCard === experiences.length - 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          →
        </NavButton>
      </NavigationControls>
    </ExperienceContainer>
  );
};

export default Experience;
