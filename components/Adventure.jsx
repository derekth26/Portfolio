import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  '&.expanded': {
    transform: 'rotate(180deg)',
  },
}));

function Adventure() {
  const [expanded, setExpanded] = React.useState([false, false, false, false]); // Array to track expanded state for each card

  const handleExpandClick = (index) => {
    setExpanded((prev) =>
      prev.map((item, idx) => (idx === index ? !item : false)) // Toggle the clicked card and collapse others
    );
  };

  const tours = [
    {
      title: "Manaus: 2, 3 or 4-Day Amazon Jungle Tour in Anaconda Lodge",
      image: "./src/assets/amazon1.jpg",
      description: "Visit the Amazon, the largest tropical rain forest and river basin in the world. Take a 2, 3 or 4-day tour through the highlights of this unique biological wonder staying at Anaconda Jungle Lodge and learn about the diverse creatures within.",
    },
    {
      title: "Amazon Jungle: 3- or 4-Day Tour at Ipanema River Guest House",
      image: "./src/assets/amazon2.jpg",
      description: "Embark on an expedition through the Amazon Jungle. Make your way down the river to the Ipanema River reserve, spending a night on a floating guest house and watching pink and grey river dolphins.",
    },
    {
      title: "Manaus: Full-Day Tour on the Amazon River",
      image: "./src/assets/amazon3.jpg",
      description: "Enjoy a full-day guided tour of the highlights of the Amazon Rainforest. Swim with river dolphins, visit an indigenous village to interact with the Dessanos and Tucanos ethnic groups, visit Januari Ecological Park and head to the Meeting of the Waters.",
    },
    {
      title: "Manaus: Multi-Day Amazon Trip at Tapiri Floating Lodge",
      image: "./src/assets/amazon4.jpg",
      description: "Tour the Juma area at the Amazon Tapiri Lodge, located 100 kilometers south of Manaus in the wild Amazon forest. Take a 3, 4, or 5-day tour and explore the Amazon Jungle.",
    },
  ];

  return (
    <div className="block">
      <h1>Adventure in the Amazon Jungle</h1>
      <p>Explore available tours</p>
      <div className="tours">
        {tours.map((tour, index) => (
          <Card sx={{ maxWidth: 800, mb: 5 }} key={index}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={tour.title}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="400"
              image={tour.image}
              alt={`Image for ${tour.title}`}
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                className={expanded[index] ? 'expanded' : ''}
                expand={expanded[index]}
                onClick={() => handleExpandClick(index)}
                aria-expanded={expanded[index]}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>
                  <div className="flex">
                    <div>{tour.description}</div>
                    <div>
                      <Button variant="contained">Learn More</Button>
                    </div>
                  </div>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Adventure;
