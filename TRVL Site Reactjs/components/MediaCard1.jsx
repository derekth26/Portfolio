import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';



export default function MediaCard1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="./src/assets/amazon.jpg"
          alt="Amazon waterfall"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Adventure
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Explore the hidden waterfall deep inside the Amazon Jungle
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