export const theme = {
  colors: {
    primary: '#3182F6',
    background: '#FFFFFF',
    text: {
      heading: '#191F28',
      body: '#4E5968',
    },
    gray: {
      light: '#F2F4F6',
      card: '#F9FAFB',
      border: '#E5E8EB',
    },
  },
  fonts: {
    primary: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },
  layout: {
    maxWidth: '1200px',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  },
};

export type Theme = typeof theme;

