'use client';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import Sidebarr from '@/components/Navbarr';

export default function About() {
  return (
    <Container maxWidth="lg">
         <Box sx={{ maxWidth: 'xl' }}>
             <Sidebarr />
            </Box>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography  variant="h4" component="h1" sx={{ mb: 1 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Box sx={{ maxWidth: 'sm' }}>
          <Button  variant="outlined" component={NextLink} href="/">
            Go to the home page
          </Button>
        </Box>
        <Copyright />
      </Box>
    </Container>
  );
}
