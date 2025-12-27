import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { introData, whatIDoData, timelineData } from '../../constants/data';

const Section = styled.section`
  padding: 120px 2rem 80px;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 100px 1.5rem 60px;
  }
`;

const IntroArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 6rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 30px rgba(49, 130, 246, 0.3);
  border: 4px solid white;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 150px;
    height: 150px;
  }
`;

const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Headline = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const Subtext = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.8;
`;

const TechStackTags = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.gray.light};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.heading};
  border: 1px solid ${({ theme }) => theme.colors.gray.border};
`;

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
  gap: 2rem;

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
`;

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

  /* 각 항목마다 독립적인 수직선 (막대사탕 모양 - 원 아래에서 시작, 텍스트 끝까지) */
  &::before {
    content: '';
    position: absolute;
    left: calc(-1.5rem + 10px); /* 원의 중심에 맞춤 (원 너비 20px의 절반) */
    top: 20px; /* 큰 원(바깥쪽 원)의 하단 위치 (원 높이 20px) */
    bottom: 3rem; /* padding-bottom 제외하고 텍스트 끝까지 */
    width: 2px;
    background: ${({ theme }) => theme.colors.primary};
    z-index: 0;
    transform: translateX(-50%); /* 선의 중심을 원의 중심에 정확히 맞춤 */
  }
`;

const TimelinePoint = styled.div`
  position: absolute;
  left: -1.5rem;
  top: 0;
  width: 20px;
  height: 20px;
  z-index: 2;

  /* 바깥쪽 원 (얇은 파란색 테두리/그림자) */
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
    box-shadow: 0 0 0 1px rgba(49, 130, 246, 0.3);
    z-index: 1;
  }

  /* 안쪽 원 (파란색 채워진 원 + 흰색 테두리) */
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

export const HeroSection: React.FC = () => {
  return (
    <Section id="hero">
      <IntroArea>
        <ProfileImageWrapper>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <ProfileImage 
              src="/assets/minjun_profile.jpg" 
              alt="프로필 사진"
            />
          </motion.div>
        </ProfileImageWrapper>
        <IntroText>
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
          <TechStackTags
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {introData.techStack.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </TechStackTags>
        </IntroText>
      </IntroArea>

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
              <WhatIDoCard key={index} $shadow as={motion.div} variants={itemVariants}>
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

