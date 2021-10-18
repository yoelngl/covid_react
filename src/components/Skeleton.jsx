import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

export default function Animations() {
  return (
    <Box sx={{ width: '100%' }} >
      <Typography variant="h3" >
          <Skeleton animation="wave"/>
      </Typography>
      <Skeleton animation="wave"/>
    </Box>
  );
}