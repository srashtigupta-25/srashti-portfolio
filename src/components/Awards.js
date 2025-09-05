import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AwardsContainer = styled.div`
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: white;
`;

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const AwardCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
  }

  .award-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .award-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .award-company {
    font-size: 0.9rem;
    opacity: 0.9;
    margin-bottom: 0.5rem;
  }

  .award-date {
    font-size: 0.8rem;
    opacity: 0.8;
  }

  p {
    font-size: 0.9rem;
    margin-top: 0.5rem;
    opacity: 0.9;
  }
`;

const Awards = () => {
  const awards = [
    {
      icon: "⚡",
      title: "SPOT Award",
      company: "NAB",
      date: "Sept 2024",
      description: "For driving team efficiency and exceptional performance"
    },
    {
      icon: "⭐",
      title: "STAR Award",
      company: "NAB",
      date: "May 2024",
      description: "For independently migrating microservices, demonstrating technical expertise"
    },
    {
      icon: "🎯",
      title: "Team Excellence 'WOW'",
      company: "Altran",
      date: "Jan 2022",
      description: "For delivering high-quality releases under tight deadlines"
    },
    {
      icon: "🚀",
      title: "Team Excellence 'WOW'",
      company: "Altran",
      date: "Mar 2020",
      description: "For building microservices-based application for SAMSUNG"
    }
  ];

  return (
    <AwardsContainer>
      <AwardsGrid>
        {awards.map((award, index) => (
          <AwardCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="award-icon">{award.icon}</div>
            <div className="award-title">{award.title}</div>
            <div className="award-company">{award.company}</div>
            <div className="award-date">{award.date}</div>
            <p>{award.description}</p>
          </AwardCard>
        ))}
      </AwardsGrid>
    </AwardsContainer>
  );
};

export default Awards;
