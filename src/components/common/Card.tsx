import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  $padding?: string;
  $background?: string;
  $shadow?: boolean;
}

const StyledCard = styled.div<CardProps>`
  background: ${({ $background, theme }) => $background || theme.colors.surface};
  border-radius: ${({ theme }) => theme.layout.cardRadius};
  padding: ${({ $padding }) => $padding || '24px'};
  box-shadow: ${({ $shadow, theme }) => ($shadow ? theme.shadows.soft : 'none')};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none; /* Remove heavy borders for soft UI */

  &:hover {
    ${({ $shadow, theme }) => 
      $shadow && `
        transform: translateY(-4px) scale(1.02);
        box-shadow: ${theme.shadows.hover};
      `
    }
  }
`;

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

