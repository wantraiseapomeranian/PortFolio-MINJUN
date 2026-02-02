import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../common/Card';
import { LinkButton } from '../common/Button';
import { SectionTitle } from '../common/SectionTitle';
import { FaGithub, FaTools, FaExternalLinkAlt, FaGlobe } from 'react-icons/fa';
import { HiArrowUpRight, HiChevronDown, HiChevronRight } from 'react-icons/hi2';
import { projectsData, otherExperienceData, featuredProjectsDescription, otherExperienceDescription } from '../../constants/data';

const Section = styled.section`
  padding: 80px 2rem;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 1.5rem;
  }
`;

const FeaturedProjectsSection = styled.div`
  margin-bottom: 8rem;
`;

const SectionDescription = styled(motion.p)`
  text-align: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 4rem;
  opacity: 0.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const FeaturedProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 3rem;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
  min-height: 400px;
  position: relative;
  overflow: visible;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    min-height: auto;
  }

`;

const ProjectThumbnail = styled.div`
  flex: 1.2;
  min-width: 50%;
  height: 100%;
  min-height: 400px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, #1E6FE8 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  font-weight: 700;
  overflow: hidden;
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  margin-right: 0;
  margin-left: -60px;
  z-index: 1;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    min-height: 300px;
    margin: 0;
    border-radius: 16px;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(49, 130, 246, 0) 0%, rgba(49, 130, 246, 0.3) 100%);
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 24px;
    pointer-events: none;
  }

  ${ProjectCard}:hover & {
    transform: scale(1.05);
    box-shadow: 0 30px 80px rgba(49, 130, 246, 0.4), 0 0 60px rgba(49, 130, 246, 0.3);

    &::after {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.5s ease;
    filter: brightness(1);
    display: block;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.15);
    filter: brightness(1.1) saturate(1.2);
  }

  a:hover img,
  div:hover img {
    transform: scale(1.05);
  }
`;

const ThumbnailLink = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;

  img {
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
    filter: brightness(0.7);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0);
    transition: background 0.3s ease;
    z-index: 1;
    pointer-events: none;
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const ThumbnailOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
  pointer-events: none;

  ${ThumbnailLink}:hover & {
    opacity: 1;
  }
`;

const ThumbnailOverlayText = styled.span`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
`;

const ThumbnailContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const DeployIcon = styled.div`
  position: absolute;
  left: 12px;
  bottom: 12px;
  background: rgba(17, 24, 39, 0.8);
  color: #ffffff;
  border-radius: 9999px;
  padding: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(6px);
  transition: transform 0.2s ease, background 0.2s ease;

  ${ThumbnailLink}:hover & {
    transform: scale(1.1);
    background: #000000;
  }
`;

const ProjectContent = styled.div`
  flex: 0.8;
  min-width: 45%;
  padding: 3rem 2.5rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 2;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  margin-left: -40px;
  margin-right: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    margin: -40px 20px 0 20px;
    padding: 2rem 1.5rem;
    border-radius: 16px;
  }

  ${ProjectCard}:hover & {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.95);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #191F28;
  position: relative;
  z-index: 1;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-bottom: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  color: #191F28;
  line-height: 1.8;
  flex: 1;
  position: relative;
  z-index: 1;
  opacity: 0.8;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ProjectTag = styled.span`
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}15 0%, ${({ theme }) => theme.colors.primary}08 100%);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  border: 1.5px solid ${({ theme }) => theme.colors.primary}30;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}25 0%, ${({ theme }) => theme.colors.primary}15 100%);
    border-color: ${({ theme }) => theme.colors.primary}50;
    transform: translateY(-2px);
  }
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  z-index: 1;
  margin-top: auto;
  padding-top: 1.5rem;
  flex-wrap: wrap;
`;

// Troubleshooting Section Header
const TroubleshootingSectionHeader = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Troubleshooting Accordion Container
const TroubleshootingAccordion = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

// Troubleshooting Accordion Item
const TroubleshootingAccordionItem = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.layout.cardRadius};
  border: 1px solid ${({ theme }) => theme.colors.gray.border};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

// Troubleshooting Accordion Header (Clickable)
const TroubleshootingAccordionHeader = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gray.light};
  }

  svg {
    transition: transform 0.3s ease;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.text.body};
  }

  ${({ $isOpen }) => $isOpen && `
    svg {
      transform: rotate(90deg);
    }
  `}
`;

const TroubleshootingAccordionTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  margin: 0;
  flex: 1;
  word-break: keep-all;
`;

// Troubleshooting Accordion Body (Expandable Content)
const TroubleshootingAccordionBody = styled(motion.div)`
  padding: 0 1.25rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TroubleshootingProblem = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #fee2e215 0%, #fecaca08 100%);
  border-left: 4px solid #ef4444;
  border-radius: 8px;
`;

const TroubleshootingProblemLabel = styled.span`
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
  color: #dc2626;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TroubleshootingProblemText = styled.p`
  color: #991b1b;
  line-height: 1.7;
  font-size: 0.95rem;
  margin: 0;
`;

const TroubleshootingSolution = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #dbeafe15 0%, #bfdbfe08 100%);
  border-left: 4px solid #3b82f6;
  border-radius: 8px;
`;

const TroubleshootingSolutionLabel = styled.span`
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TroubleshootingSolutionText = styled.p`
  color: #1e40af;
  line-height: 1.7;
  font-size: 0.95rem;
  margin: 0;
`;

const TroubleshootingResult = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #ecfdf515 0%, #bbf7d008 100%);
  border-left: 4px solid #16a34a;
  border-radius: 8px;
`;

const TroubleshootingResultLabel = styled.span`
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
  color: #15803d;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TroubleshootingResultText = styled.p`
  color: #166534;
  line-height: 1.7;
  font-size: 0.95rem;
  margin: 0;
`;

const OtherExperienceSection = styled.div`
  margin-top: 2rem;
`;

const OtherExperienceTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 3rem;
  text-align: center;
`;

const OtherExperienceGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid #e5e8eb;
  border-radius: 12px;
  overflow: hidden;
`;

const OtherExperienceCard = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid #e5e8eb;
  border-radius: 0;
  transition: all 0.2s ease;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray.light};
    border-left: 3px solid ${({ theme }) => theme.colors.primary};
    padding-left: calc(2rem - 3px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
  }
`;

const OtherExperienceHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`;

const OtherExperienceIcon = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  opacity: 0.6;
  transition: all 0.2s ease;

  ${OtherExperienceCard}:hover & {
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }
`;

const OtherExperienceCardTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.heading};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const OtherExperienceDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.6;
  margin: 0;
  opacity: 0.8;
`;

const OtherExperienceSummary = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    white-space: normal;
  }
`;

const OtherExperienceHighlights = styled.ul`
  list-style: none;
  padding: 0 0 0.5rem 0;
  margin: 0 0 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-bottom: 1px solid #e5e8eb;
`;

const OtherExperienceHighlight = styled.li`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.5;
  opacity: 0.75;
  position: relative;
  padding-left: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    white-space: normal;
  }
`;

const OtherExperienceTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding-top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const OtherExperienceTech = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.body};
  padding: 0.3rem 0.6rem;
  background: transparent;
  border: 1px solid #e5e8eb;
  border-radius: 6px;
  transition: all 0.2s ease;

  ${OtherExperienceCard}:hover & {
    border-color: ${({ theme }) => theme.colors.primary}40;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const OtherExperienceActions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    margin-top: 0.5rem;
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

export const ProjectsSection: React.FC = () => {
  const [expandedTroubleshootingItems, setExpandedTroubleshootingItems] = useState<Set<string>>(new Set());

  const toggleTroubleshootingItem = (projectIndex: number, itemIndex: number) => {
    const key = `${projectIndex}-${itemIndex}`;
    setExpandedTroubleshootingItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  return (
    <Section id="projects">
      <FeaturedProjectsSection>
        <SectionTitle $align="center">Featured Projects</SectionTitle>
        <SectionDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {featuredProjectsDescription}
        </SectionDescription>
        <FeaturedProjectsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projectsData.map((project, index) => {
            return (
              <ProjectCard key={index} as={motion.div} variants={itemVariants}>
                <ProjectThumbnail>
                  {project.deployUrl ? (
                    <ThumbnailLink
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.thumbnail ? (
                        <img src={project.thumbnail} alt={project.title} />
                      ) : (
                        project.title.charAt(0)
                      )}
                      <ThumbnailOverlay>
                        <ThumbnailOverlayText>
                          Visit Site <FaExternalLinkAlt size={14} />
                        </ThumbnailOverlayText>
                      </ThumbnailOverlay>
                      <DeployIcon>
                        <FaExternalLinkAlt size={12} />
                      </DeployIcon>
                    </ThumbnailLink>
                  ) : (
                    <ThumbnailContent>
                      {project.thumbnail ? (
                        <img src={project.thumbnail} alt={project.title} />
                      ) : (
                        project.title.charAt(0)
                      )}
                    </ThumbnailContent>
                  )}
                </ProjectThumbnail>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTags>
                    {project.tags.map((tag, tagIndex) => (
                      <ProjectTag key={tagIndex}>#{tag}</ProjectTag>
                    ))}
                  </ProjectTags>
                  <ProjectActions>
                    {Array.isArray(project.githubUrl) ? (
                      project.githubUrl.map((url, urlIndex) => (
                        <LinkButton
                          key={urlIndex}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          $variant="primary"
                        >
                          <FaGithub /> {urlIndex === 0 ? 'Backend' : 'Frontend'}
                        </LinkButton>
                      ))
                    ) : (
                      <LinkButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        $variant="primary"
                      >
                        <FaGithub /> GitHub
                      </LinkButton>
                    )}
                    {project.deployUrl && (
                      <LinkButton
                        href={project.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        $variant="outline"
                      >
                        <FaGlobe /> Live Demo
                      </LinkButton>
                    )}
                  </ProjectActions>
                  {project.troubleshooting && project.troubleshooting.length > 0 && (
                    <>
                      <TroubleshootingSectionHeader>
                        🔥 Key Technical Challenges
                      </TroubleshootingSectionHeader>
                      <TroubleshootingAccordion>
                        {project.troubleshooting.map((item, itemIndex) => {
                          const itemKey = `${index}-${itemIndex}`;
                          const isItemOpen = expandedTroubleshootingItems.has(itemKey);
                          return (
                            <TroubleshootingAccordionItem key={itemIndex}>
                              <TroubleshootingAccordionHeader
                                $isOpen={isItemOpen}
                                onClick={() => toggleTroubleshootingItem(index, itemIndex)}
                              >
                                <TroubleshootingAccordionTitle>{item.title}</TroubleshootingAccordionTitle>
                                <HiChevronRight size={20} />
                              </TroubleshootingAccordionHeader>
                              <AnimatePresence>
                                {isItemOpen && (
                                  <TroubleshootingAccordionBody
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                  >
                                    <TroubleshootingProblem>
                                      <TroubleshootingProblemLabel>Problem</TroubleshootingProblemLabel>
                                      <TroubleshootingProblemText>{item.problem}</TroubleshootingProblemText>
                                    </TroubleshootingProblem>
                                    <TroubleshootingSolution>
                                      <TroubleshootingSolutionLabel>Solution</TroubleshootingSolutionLabel>
                                      <TroubleshootingSolutionText>{item.solution}</TroubleshootingSolutionText>
                                    </TroubleshootingSolution>
                                    {item.result && (
                                      <TroubleshootingResult>
                                        <TroubleshootingResultLabel>Result</TroubleshootingResultLabel>
                                        <TroubleshootingResultText>{item.result}</TroubleshootingResultText>
                                      </TroubleshootingResult>
                                    )}
                                  </TroubleshootingAccordionBody>
                                )}
                              </AnimatePresence>
                            </TroubleshootingAccordionItem>
                          );
                        })}
                      </TroubleshootingAccordion>
                    </>
                  )}
                </ProjectContent>
              </ProjectCard>
            );
          })}
        </FeaturedProjectsGrid>
      </FeaturedProjectsSection>

      <OtherExperienceSection>
        <OtherExperienceTitle>Other Experience</OtherExperienceTitle>
        <SectionDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {otherExperienceDescription}
        </SectionDescription>
        <OtherExperienceGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {otherExperienceData.map((experience, index) => (
            <OtherExperienceCard 
              key={index} 
              as={motion.div} 
              variants={itemVariants}
              onClick={() => {
                if (experience.githubUrl) {
                  window.open(experience.githubUrl, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <OtherExperienceIcon>
                <HiArrowUpRight />
              </OtherExperienceIcon>
              <OtherExperienceHeader>
                <OtherExperienceCardTitle>{experience.title}</OtherExperienceCardTitle>
                <OtherExperienceDescription>
                  <OtherExperienceSummary>{experience.summary}</OtherExperienceSummary>
                  {experience.highlights && experience.highlights.length > 0 && (
                    <OtherExperienceHighlights>
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <OtherExperienceHighlight key={highlightIndex}>
                          {highlight}
                        </OtherExperienceHighlight>
                      ))}
                    </OtherExperienceHighlights>
                  )}
                  <OtherExperienceTechStack>
                    {experience.techStack.map((tech, techIndex) => (
                      <OtherExperienceTech key={techIndex}>{tech}</OtherExperienceTech>
                    ))}
                  </OtherExperienceTechStack>
                </OtherExperienceDescription>
              </OtherExperienceHeader>
              {experience.githubUrl && (
                <OtherExperienceActions
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                  }}
                >
                  <LinkButton
                    href={experience.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    $variant="outline"
                    $size="small"
                  >
                    <FaGithub /> GitHub
                  </LinkButton>
                </OtherExperienceActions>
              )}
            </OtherExperienceCard>
          ))}
        </OtherExperienceGrid>
      </OtherExperienceSection>
    </Section>
  );
};

