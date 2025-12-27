import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { ProgressBar } from '../common/ProgressBar';
import { SectionTitle } from '../common/SectionTitle';
import { skillsData } from '../../constants/data';

const Section = styled.section`
  padding: 80px 2rem;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 1.5rem;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const SkillCategory = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 1rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SkillIcon = styled.div<{ $color?: string }>`
  font-size: 2rem;
  color: ${({ $color, theme }) => $color || theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillNameAndPercentage = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.heading};
`;

const SkillPercentage = styled.span<{ $color?: string }>`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ $color, theme }) => $color || theme.colors.primary};
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.6;
  margin-top: 0.5rem;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const skillCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const SkillsSection: React.FC = () => {
  return (
    <Section id="skills">
      <SectionTitle $align="center">Skills</SectionTitle>
      <SkillsContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsData.map((category, categoryIndex) => (
          <SkillCategory key={categoryIndex} variants={categoryVariants}>
            <CategoryTitle>{category.title}</CategoryTitle>
            <SkillsGrid>
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.icon;
                const skillColor = skill.color;
                return (
                  <SkillCard
                    key={skillIndex}
                    $shadow
                    as={motion.div}
                    variants={skillCardVariants}
                  >
                    <SkillHeader>
                      <SkillIcon $color={skillColor}>
                        <Icon />
                      </SkillIcon>
                      <SkillNameAndPercentage>
                        <SkillName>{skill.name}</SkillName>
                        <SkillPercentage $color={skillColor}>{skill.percentage}%</SkillPercentage>
                      </SkillNameAndPercentage>
                    </SkillHeader>
                    <ProgressBar percentage={skill.percentage} $color={skillColor} />
                    <SkillDescription>{skill.description}</SkillDescription>
                  </SkillCard>
                );
              })}
            </SkillsGrid>
          </SkillCategory>
        ))}
      </SkillsContainer>
    </Section>
  );
};

