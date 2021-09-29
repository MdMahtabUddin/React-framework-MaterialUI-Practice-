import React, { useState }  from 'react';
import {Box, Grid, Item  } from '@mui/material';
import { useEffect } from 'react';
import News from '../News/News';
const Newspaper = () => {

  const [articles , setArticles]= useState([]);
    useEffect( ()=>{
      fetch ('https://newsapi.org/v2/everything?q=bitcoin&apiKey=d30e84254dfd4856b55ed35f874e9c5a')
      .then(res => res.json())
      .then(data => setArticles(data))
    },[])

    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          articles.map(article=><Grid item xs={2} sm={4} md={4} >
           <News article={article}></News>
            </Grid>)
        }
      </Grid>
    </Box>
    );
};

export default Newspaper;