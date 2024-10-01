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

// Import images from the assets folder
import aurora1 from '../assets/aurora1.jpg';
import aurora2 from '../assets/aurora2.jpg';
import aurora3 from '../assets/aurora3.jpg';
import aurora4 from '../assets/aurora4.jpg';
import magicbanner from '../assets/magicbanner.jpg'

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
      title: "Tromsø: Northern Lights Tour with Hot Food and Drinks",
      image: aurora1, // Use imported image
      description: "Hunt for the northern lights around Tromsø on this tour with a local guide. Take in spectacular views of the Arctic scenery, and beat the cold with a warm meal, hot drinks, snacks, and a thermal suit.",
    },
    {
      title: "Tromsø: Northern Lights Chase Minibus Tour with Campfire",
      image: aurora2, // Use imported image
      description: "Search for the Northern Lights on an evening bus day trip from Tromsø. Enjoy a complete Arctic experience with marshmallows and warm drinks by the fire.",
    },
    {
      title: "From Tromsø: Northern Lights Chase by Boat",
      image: aurora3, // Use imported image
      description: "Embark on an Arctic voyage of the Barents Sea and experience the Northern Lights. Enjoy a warm drink and cookies on deck while searching for the green lady.",
    },
    {
      title: "From Tromsø: Aurora Borealis Tour",
      image: aurora4, // Use imported image
      description: "Experience one of the world’s greatest natural phenomena on an evening bus tour. Search for the Northern Lights with your experienced guides who will find the best spots for you.",
    },
  ];

  return (
    <div className="block">
      <div className="magicbanner">
        <h1>Chasing the "Northern Lights"</h1>
        <p>Explore available tours</p>
      </div>
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
              subheader="October 1, 2024"
            />
            <CardMedia
              component="img"
              height="400"
              image={tour.image} // Correctly using imported image
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
