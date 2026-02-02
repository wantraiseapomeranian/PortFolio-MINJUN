import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { LinkButton } from '../common/Button';
import { introData, whatIDoData, timelineData } from '../../constants/data';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Section = styled.section`
  padding: 120px 2rem 80px;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 100px 1.5rem 60px;
  }
`;

// Bento Grid Container
const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: ${({ theme }) => theme.layout.gridGap};
  margin-bottom: 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

// Right Column Container (Open to Work + Tech Stack)
const RightColumn = styled.div`
  grid-column: span 1;
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout.gridGap};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: span 1;
    grid-row: span 1;
  }
`;

// Box 1: Introduction (2x2 - spans 2 columns, 2 rows)
const IntroBox = styled(Card)`
  grid-column: span 2;
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: span 1;
    grid-row: span 1;
    padding: 2rem;
  }
`;

const Headline = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  line-height: 1.2;
  margin-bottom: 1.5rem;
  word-break: keep-all;
  overflow-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Subtext = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const CTAGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

// Box 2: Profile Image (1x2 - spans 1 column, 2 rows)
const ProfileBox = styled(Card)`
  grid-column: span 1;
  grid-row: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: span 1;
    grid-row: span 1;
    min-height: 300px;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.layout.cardRadius};
`;

// Box 3: Open to Work Status (1x1)
const StatusBox = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  flex: 1;
`;

const StatusIndicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #10B981;
  margin-bottom: 0.75rem;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.1);
    }
  }
`;

const StatusText = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 0.25rem;
`;

const StatusSubtext = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.body};
`;

// Box 4: Tech Stack Ticker (1x1)
const TechStackBox = styled(Card)`
  padding: 2rem;
  overflow: hidden;
  flex: 1;
`;

const TechStackTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.body};
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TechStackContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
`;

const TechTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.gray.light};
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.heading};
  white-space: nowrap;
`;

// What I Do Section (기존 유지하되 스타일 조정)
const WhatIDoSection = styled.div`
  margin-bottom: 6rem;
`;

const WhatIDoTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 3rem;
  text-align: center;
`;

const WhatIDoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.layout.gridGap};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const WhatIDoCard = styled(Card)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const WhatIDoIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const WhatIDoCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.heading};
`;

const WhatIDoDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.6;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

// Timeline Section (기존 유지하되 스타일 조정)
const TimelineSection = styled.div``;

const TimelineTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 3rem;
  text-align: center;
`;

const TimelineContainer = styled.div`
  position: relative;
  padding-left: 2.5rem;
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-bottom: 3rem;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: calc(-1.5rem + 10px);
    top: 20px;
    bottom: 3rem;
    width: 2px;
    background: ${({ theme }) => theme.colors.primary};
    z-index: 0;
    transform: translateX(-50%);
  }
`;

const TimelinePoint = styled.div`
  position: absolute;
  left: -1.5rem;
  top: 0;
  width: 20px;
  height: 20px;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 1px rgba(0, 82, 255, 0.3);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid white;
    z-index: 2;
  }
`;

const TimelineDate = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.25rem;
`;

const TimelineItemTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const TimelineItemDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.7;
  font-size: 0.95rem;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const boxVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'spring' as const,
      stiffness: 100,
    },
  },
};

export const HeroSection: React.FC = () => {
  return (
    <Section id="hero">
      <BentoGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Box 1: Introduction (2x2) */}
        <motion.div
          variants={boxVariants}
        >
          <IntroBox $shadow={true}>
          <div>
            <Headline
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {introData.headline}
            </Headline>
            <Subtext
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {introData.subtext}
            </Subtext>
          </div>
          <CTAGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <LinkButton
              href="https://github.com/wantraiseapomeranian"
              target="_blank"
              rel="noopener noreferrer"
              $variant="primary"
            >
              <FaGithub /> GitHub
            </LinkButton>
            <LinkButton
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alswns6258@gmail.com"
              $variant="outline"
            >
              <FaEnvelope /> Contact
            </LinkButton>
          </CTAGroup>
          </IntroBox>
        </motion.div>

        {/* Box 2: Profile Image (1x2) */}
        <motion.div
          variants={boxVariants}
        >
          <ProfileBox $shadow={true}>
            <ProfileImage
              src="/assets/minjun_profile.jpg"
              alt="프로필 사진"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, type: 'spring' }}
            />
          </ProfileBox>
        </motion.div>

        {/* Right Column: Open to Work + Tech Stack */}
        <motion.div
          variants={boxVariants}
        >
          <RightColumn>
            {/* Box 3: Open to Work Status */}
            <StatusBox $shadow={true}>
              <StatusIndicator />
              <StatusText>Open to Work</StatusText>
              <StatusSubtext>Available for opportunities</StatusSubtext>
            </StatusBox>

            {/* Box 4: Tech Stack Ticker */}
            <TechStackBox $shadow={true}>
              <TechStackTitle>Tech Stack</TechStackTitle>
              <TechStackContainer>
                {introData.techStack.map((tech, index) => (
                  <TechTag
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    {tech}
                  </TechTag>
                ))}
              </TechStackContainer>
            </TechStackBox>
          </RightColumn>
        </motion.div>
      </BentoGrid>

      {/* What I Do Section */}
      <WhatIDoSection>
        <WhatIDoTitle>What I Do</WhatIDoTitle>
        <WhatIDoGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {whatIDoData.map((item, index) => {
            const Icon = item.icon;
            return (
              <WhatIDoCard key={index} $shadow={true} as={motion.div} variants={itemVariants}>
                <WhatIDoIcon>
                  <Icon />
                </WhatIDoIcon>
                <WhatIDoCardTitle>{item.title}</WhatIDoCardTitle>
                <WhatIDoDescription>{item.description}</WhatIDoDescription>
              </WhatIDoCard>
            );
          })}
        </WhatIDoGrid>
      </WhatIDoSection>

      {/* Timeline Section */}
      <TimelineSection>
        <TimelineTitle>Education & Experience</TimelineTitle>
        <TimelineContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              variants={itemVariants}
            >
              <TimelinePoint />
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineItemTitle>{item.title}</TimelineItemTitle>
              <TimelineItemDescription>{item.description}</TimelineItemDescription>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </TimelineSection>
    </Section>
  );
};
