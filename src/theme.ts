export const theme = {
  colors: {
    primary: '#0052FF', // Coinbase Blue - trustworthy & energetic
    background: '#F2F4F6', // Light cool gray - not pure white
    surface: '#FFFFFF', // Pure white for cards
    text: {
      heading: '#191F28', // High contrast for headings
      body: '#4E5968', // High contrast for body text
    },
    gray: {
      light: '#F2F4F6',
      card: '#FFFFFF',
      border: '#E5E8EB',
    },
  },
  fonts: {
    primary: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },
  layout: {
    maxWidth: '1200px',
    gridGap: '20px', // Consistent grid gap for Bento layout
    cardRadius: '24px', // Modern rounded corners
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  },
  shadows: {
    soft: '0 4px 20px rgba(0, 0, 0, 0.05)', // Soft shadow for cards
    hover: '0 8px 30px rgba(0, 0, 0, 0.08)', // Slightly stronger on hover
  },
};

export type Theme = typeof theme;

