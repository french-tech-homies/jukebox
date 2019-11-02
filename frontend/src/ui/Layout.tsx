import React from 'react';
import { AppHeader } from './AppHeader';
import { Box } from '@material-ui/core';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <AppHeader />
      <Box display="flex" alignItems="center" justifyContent="center" p={4}>
        {children}
      </Box>
    </>
  );
};
