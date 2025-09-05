import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CommunityContainer = styled.div`
  background: white;
`;

const CommunityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const CommunityCard = styled(motion.div)`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(135, 206, 235, 0.2);
    border-color: #87CEEB;
  }

  .icon-container {
    font-size: 3rem;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
  }

  h3 {
    color: #87CEEB;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    padding: 0.5rem;
    transition: all 0.3s ease;
  }

  &:hover h3 {
    margin: 0.8rem 0;
    padding: 0.8rem;
    background: rgba(135, 206, 235, 0.1);
    border-radius: 10px;
  }

  .content-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #87CEEB 0%, #4682B4 100%);
    color: white;
    padding: 2rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover .content-overlay {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover .icon-container {
    transform: scale(1.2) rotate(-10deg);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.8rem;
    position: relative;
    padding-left: 1.5rem;
    font-size: 0.9rem;
    line-height: 1.4;

    &:before {
      content: "🌱";
      position: absolute;
      left: 0;
      color: white;
      font-size: 0.8rem;
    }
  }
`;

const Community = () => {
  const communityAreas = [
    {
      title: "Environmental Initiatives",
      icon: "🌱",
      items: [
        "Participated in NAB plantation drive (Feb 2023)",
        "Promoted eco-friendly practices",
        "Supported CSR environmental initiatives"
      ]
    },
    {
      title: "National Service Scheme",
      icon: "🤝",
      items: [
        "Active NSS member (2016-2018)",
        "Community development programs",
        "Educational initiatives for rural areas"
      ]
    },
    {
      title: "Technical Leadership",
      icon: "🎯",
      items: [
        "Coverage Team Lead for 'Mayukh'16'",
        "Event management and coordination",
        "Large-scale technical competitions"
      ]
    }
  ];

  return (
    <CommunityContainer>
      <CommunityGrid>
        {communityAreas.map((area, index) => (
          <CommunityCard
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <div className="icon-container">{area.icon}</div>
            <h3>{area.title}</h3>
            
            <div className="content-overlay">
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>{area.title}</h3>
              <ul>
                {area.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </CommunityCard>
        ))}
      </CommunityGrid>
    </CommunityContainer>
  );
};

export default Community;
