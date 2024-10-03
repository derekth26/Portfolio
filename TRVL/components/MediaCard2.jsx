import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

// Import the image correctly
import baliImage from '../assets/bali.jpg'; // Adjust the path based on your project structure

export default function MediaCard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={baliImage} // Use the imported image here
          alt="Bali's islands"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Luxury
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Travel through the islands of Bali in a private cruise.
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
