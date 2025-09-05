import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationContainer = styled.div`
  background: white;
`;

const EducationItem = styled(motion.div)`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  border-left: 5px solid #87CEEB;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  .university {
    color: #87CEEB;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .degree {
    color: #666;
    margin-bottom: 1rem;
  }
`;

const Education = () => {
  const educationData = [
    {
      title: "Master of Science in Computer Science",
      university: "Northeastern University, Boston",
      degree: "2025 - 2027 (Expected)",
      description: "Pursuing Master's in Computer Science to broaden my technical foundation and explore next-generation development frameworks. Enhancing my expertise in cloud computing, microservices orchestration, and advanced software architecture principles."
    },
    {
      title: "Bachelor of Technology in Computer Science",
      university: "Bansthali Vidhyapith, India",
      degree: "2015 - 2019",
      description: "Foundation in computer science fundamentals, data structures, algorithms, and software engineering. Graduated with strong understanding of programming principles and system design."
    }
  ];

  return (
    <EducationContainer>
      {educationData.map((edu, index) => (
        <EducationItem
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <h3>{edu.title}</h3>
          <div className="university">{edu.university}</div>
          <div className="degree">{edu.degree}</div>
          <p>{edu.description}</p>
        </EducationItem>
      ))}
    </EducationContainer>
  );
};

export default Education;
