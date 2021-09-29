import React from 'react';
import {Box, Grid, Item  } from '@mui/material';
const Newspaper = () => {
    

    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          <Grid item xs={2} sm={4} md={4} >
           
          </Grid>
        }
      </Grid>
    </Box>
    );
};

export default Newspaper;