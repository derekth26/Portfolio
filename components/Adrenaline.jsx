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
      title: "From Marrakech: 3-Day Merzouga and Sahara Desert Tour",
      image: "./src/assets/sahara1.jpg",
      description: "Experience the Moroccan Sahara Desert on a 3-day trip from Marrakech to Merzouga. Explore nomadic life, visit iconic kasbahs, ride camels at sunset and sunrise, and camp in the majestic desert.",
    },
    {
      title: "From Marrakech: Merzouga 3-Day Desert Safari with Food",
      image: "./src/assets/sahara2.jpg",
      description: "Discover the magic of the Merzouga Desert on a 3-day journey from Marrakech. Ride camels, watch stunning sunsets, and sleep under the stars in a Bedouin camp for an unforgettable desert adventure.",
    },
    {
      title: "From Marrakech: Unforgettable 3-Day Desert Tour to Fes",
      image: "./src/assets/sahara3.jpg",
      description: "Explore Morocco's Sahara in a 3-day tour from Marrakech to Fes. Enjoy camel rides, stunning sunsets and luxury camping under the stars.",
    },
    {
      title: "From Marrakech: 2-Day Adventure to the Zagora Desert",
      image: "./src/assets/sahara4.jpg",
      description: "Experience the gateway to the Sahara in Zagora on a 2-day trip from Marrakech. Ride a camel to a Berber camp, enjoy a local dinner, sit around a fire, and spend the night in a tent under the stars.",
    },
  ];

  return (
    <div className="block">
      <h1>Journey Through the Sahara</h1>
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
