import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.div`
  background: #f8f9fa;
  padding: 2rem 0;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }
`;

const SkillCategory = styled(motion.div)`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 1.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  flex: 1;
  min-width: 250px;
  max-width: 300px;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 35px rgba(135, 206, 235, 0.2);
    border-color: #87CEEB;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(135, 206, 235, 0.1), transparent);
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #87CEEB;
    font-weight: 600;
    position: relative;
    z-index: 1;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  .skill-tag {
    background: linear-gradient(45deg, #FFD700, #FFA500);
    color: white;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);

    &:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
    }
  }
`;

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      skills: ["Java", "Spring Boot", "Spring Framework", "Microservices", "REST APIs"]
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Kubernetes", "Jenkins", "Git", "CI/CD"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Mentoring", "Problem Solving", "Team Collaboration", "Creative Writing"]
    }
  ];

  return (
    <SkillsContainer>
      <SkillsGrid>
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.7, 
              delay: index * 0.15,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
              viewport={{ once: true }}
            >
              {category.title}
            </motion.h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.15 + 0.3 + idx * 0.08,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
