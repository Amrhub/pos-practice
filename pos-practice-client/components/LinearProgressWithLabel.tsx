import { LinearProgress, LinearProgressProps, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const LinearProgressWithLabel = (props: LinearProgressProps & { value: number }) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box sx={{ width: '100%', mr: 1 }}>
      <LinearProgress variant='determinate' {...props} />
    </Box>
    <Box sx={{ minWidth: 35 }}>
      <Typography variant='h5' component='p' color='text.secondary'>{`${Math.round(
        props.value,
      )}%`}</Typography>
    </Box>
  </Box>
);

export default LinearProgressWithLabel;
