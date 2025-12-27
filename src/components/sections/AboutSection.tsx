import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { coreValuesData, aboutData } from '../../constants/data';

const Section = styled.section`
  padding: 80px 2rem;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.gray.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 1.5rem;
  }
`;

const QuoteSection = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const QuoteMark = styled.span`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  line-height: 1;
  display: block;
  margin-bottom: 1rem;
`;

const QuoteText = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const CoreValuesSection = styled.div`
  margin-bottom: 5rem;
`;

const CoreValuesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 3rem;
  text-align: center;
`;

const CoreValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const CoreValueCard = styled(Card)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.gray.card};
`;

const CoreValueIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const CoreValueTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.heading};
`;

const CoreValueDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.6;
`;

const InformationSection = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const CodeEditorContainer = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #e5e8eb;
`;

const CodeEditorHeader = styled.div`
  background: #e9ecef;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid #dee2e6;
`;

const CodeEditorButton = styled.div<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const CodeEditorTitle = styled.div`
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Consolas', monospace;
  font-size: 0.75rem;
  color: #6c757d;
  margin-left: 0.5rem;
  font-weight: 500;
`;

const CodeEditorContent = styled.div`
  padding: 1.5rem;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.8;
  background: #ffffff;
  color: #24292e;
  overflow-x: auto;
`;

const CodeLine = styled.div`
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CodeKeyword = styled.span`
  color: #005cc5;
  font-weight: 600;
`;

const CodeVariable = styled.span`
  color: #6f42c1;
`;

const CodeString = styled.span`
  color: #032f62;
`;

const CodeProperty = styled.span`
  color: #005cc5;
`;

const CodeValue = styled.span`
  color: #e36209;
`;

const CodeBracket = styled.span`
  color: #24292e;
`;

const CodeLink = styled.a`
  color: #e36209;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
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

export const AboutSection: React.FC = () => {
  return (
    <Section id="about">
      <QuoteSection>
        <QuoteMark>"</QuoteMark>
        <QuoteText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          데이터의 흐름을 꿰뚫고,<br className="md:hidden" /> 견고한 서비스 아키텍처를 설계합니다
        </QuoteText>
      </QuoteSection>

      <CoreValuesSection>
        <CoreValuesTitle>Core Values</CoreValuesTitle>
        <CoreValuesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {coreValuesData.map((value, index) => {
            const Icon = value.icon;
            return (
              <CoreValueCard key={index} as={motion.div} variants={itemVariants}>
                <CoreValueIcon>
                  <Icon />
                </CoreValueIcon>
                <CoreValueTitle>{value.title}</CoreValueTitle>
                <CoreValueDescription>{value.description}</CoreValueDescription>
              </CoreValueCard>
            );
          })}
        </CoreValuesGrid>
      </CoreValuesSection>

      <InformationSection
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <CodeEditorContainer>
          <CodeEditorHeader>
            <CodeEditorButton $color="#ff5f57" />
            <CodeEditorButton $color="#ffbd2e" />
            <CodeEditorButton $color="#28ca42" />
            <CodeEditorTitle>developer.js</CodeEditorTitle>
          </CodeEditorHeader>
          <CodeEditorContent>
            <CodeLine>
              <CodeKeyword>const</CodeKeyword> <CodeVariable>developer</CodeVariable> <CodeBracket>=</CodeBracket> <CodeBracket>{'{'}</CodeBracket>
            </CodeLine>
            <CodeLine>
              &nbsp;&nbsp;<CodeProperty>name</CodeProperty><CodeBracket>:</CodeBracket> <CodeString>'{aboutData.information.name}'</CodeString><CodeBracket>,</CodeBracket>
            </CodeLine>
            <CodeLine>
              &nbsp;&nbsp;<CodeProperty>education</CodeProperty><CodeBracket>:</CodeBracket> <CodeString>'{aboutData.information.education}'</CodeString><CodeBracket>,</CodeBracket>
            </CodeLine>
            <CodeLine>
              &nbsp;&nbsp;<CodeProperty>contact</CodeProperty><CodeBracket>:</CodeBracket> <CodeString>'{aboutData.information.contact}'</CodeString><CodeBracket>,</CodeBracket>
            </CodeLine>
            <CodeLine>
              &nbsp;&nbsp;<CodeProperty>github</CodeProperty><CodeBracket>:</CodeBracket> <CodeString>'{aboutData.information.notion}'</CodeString>
            </CodeLine>
            <CodeLine>
              <CodeBracket>{'}'}</CodeBracket><CodeBracket>;</CodeBracket>
            </CodeLine>
          </CodeEditorContent>
        </CodeEditorContainer>
      </InformationSection>
    </Section>
  );
};

