import { ReactNode } from 'react';
import { Box } from '@mui/material';

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
}

export function FadeInUp({ children, delay = 0 }: FadeInUpProps) {
  return (
    <Box
      sx={{
        opacity: 0,
        transform: 'translateY(40px)',
        animation: `fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards`,
        animationDelay: `${delay}s`,
        '@keyframes fadeInUp': {
          to: {
            opacity: 1,
            transform: 'none',
          },
        },
      }}
    >
      {children}
    </Box>
  );
}
