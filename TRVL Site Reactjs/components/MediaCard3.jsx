import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function MediaCard3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="./src/assets/aurora.jpg"
          alt="Himalayan Mountains"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Magic
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Experience the "Northern Lights" at its brightest and most beautiful 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}