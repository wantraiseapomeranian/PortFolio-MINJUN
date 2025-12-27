import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  $padding?: string;
  $background?: string;
  $shadow?: boolean;
}

const StyledCard = styled.div<CardProps>`
  background: ${({ $background, theme }) => $background || theme.colors.background};
  border-radius: 12px;
  padding: ${({ $padding }) => $padding || '24px'};
  box-shadow: ${({ $shadow }) => ($shadow ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none')};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    ${({ $shadow }) => $shadow && 'transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);'}
  }
`;

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

