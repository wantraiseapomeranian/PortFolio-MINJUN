import styled from 'styled-components';

interface SectionTitleProps {
  children: React.ReactNode;
  $align?: 'left' | 'center' | 'right';
}

const StyledSectionTitle = styled.h2<SectionTitleProps>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 3rem;
  text-align: ${({ $align }) => $align || 'left'};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, $align }) => {
  return <StyledSectionTitle $align={$align}>{children}</StyledSectionTitle>;
};

