import styled from 'styled-components';

interface ProgressBarProps {
  percentage: number;
  $height?: string;
  $color?: string;
}

const ProgressContainer = styled.div<{ $height?: string }>`
  width: 100%;
  height: ${({ $height }) => $height || '8px'};
  background: ${({ theme }) => theme.colors.gray.light};
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ percentage: number; $color?: string }>`
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  background: ${({ $color, theme }) => $color || theme.colors.primary};
  border-radius: 10px;
  transition: width 0.6s ease;
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, $height, $color }) => {
  return (
    <ProgressContainer $height={$height}>
      <ProgressFill percentage={percentage} $color={$color} />
    </ProgressContainer>
  );
};

