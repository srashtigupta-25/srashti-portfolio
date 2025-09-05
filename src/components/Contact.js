import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  background: #333;
  color: white;
  text-align: center;
`;

const ContactContent = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto;

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #FFD700;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #FFD700;
  color: #333;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
  }
`;

const Contact = () => {
  const contactLinks = [
    {
      href: "mailto:sg.srashtigupta@gmail.com",
      icon: "fas fa-envelope",
      text: "Email Me"
    },
    {
      href: "https://linkedin.com/in/srashti-gupta-07b634151",
      icon: "fab fa-linkedin",
      text: "LinkedIn"
    },
    {
      href: "https://github.com/srashtigupta-25",
      icon: "fab fa-github",
      text: "GitHub"
    },
    {
      href: "https://instagram.com/invidioustart",
      icon: "fab fa-instagram",
      text: "Poetry"
    }
  ];

  return (
    <ContactContainer>
      <ContactContent
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Ready to Spark Something Amazing?</h3>
        <p>
          I'm actively seeking Summer 2026 internship opportunities where I can bring my 
          electric energy, technical expertise, and creative problem-solving skills to your team.
        </p>
        <ContactLinks>
          {contactLinks.map((link, index) => (
            <ContactLink
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={link.icon}></i> {link.text}
            </ContactLink>
          ))}
        </ContactLinks>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
