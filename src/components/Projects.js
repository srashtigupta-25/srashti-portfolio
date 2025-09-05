import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  background: white;
`;

const ProjectItem = styled(motion.div)`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  border-left: 5px solid #87CEEB;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .project-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  .project-description {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .project-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .feature-card {
    background: white;
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  .feature-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .tech-tag {
    background: #87CEEB;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const Projects = () => {
  const features = [
    {
      icon: "❓",
      title: "Smart Q&A System",
      description: "Intelligent question categorization and tagging system"
    },
    {
      icon: "🏆",
      title: "Reputation System",
      description: "Gamified points and badges for active contributors"
    },
    {
      icon: "🔍",
      title: "Advanced Search",
      description: "Full-text search with filters and sorting options"
    },
    {
      icon: "💬",
      title: "Real-time Chat",
      description: "Live discussion threads and instant notifications"
    }
  ];

  const techStack = [
    "Java", "Spring Boot", "Spring Security", "MySQL", 
    "Redis", "WebSocket", "Docker", "AWS"
  ];

  return (
    <ProjectsContainer>
      <ProjectItem
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="project-title">Pathshala - Q&A Learning Platform</h3>
        <p className="project-description">
          A comprehensive question-and-answer platform designed to facilitate knowledge sharing and collaborative learning. 
          Built with modern web technologies, Pathshala enables students and educators to engage in meaningful discussions, 
          share resources, and build a community of learners.
        </p>
        
        <div className="project-features">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              className="tech-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </ProjectItem>
    </ProjectsContainer>
  );
};

export default Projects;
