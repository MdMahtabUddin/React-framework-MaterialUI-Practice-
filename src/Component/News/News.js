import React from 'react';
import {Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography } from "@mui/material";

const News = (props) => {
    const {title, description , urlToImage} =props.article; 
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar  aria-label="recipe">
            
          </Avatar>
        }
        
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={urlToImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      
      
    </Card>
    );
};

export default News;