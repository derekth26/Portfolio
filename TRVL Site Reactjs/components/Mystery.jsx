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
      title: "Benagil: Caves, Beaches, and Secret Spots Guided Kayak Tour",
      image: "./src/assets/atlantic1.jpg",
      description: "Discover the beauty of the Benagil Caves from the water on this guided kayaking tour. Paddle along wild beaches and admire fantastical limestone formations that have been sculpted by the sea.",
    },
    {
      title: "From Faro: Benagil Cave, Marinha Beach, Algar Seco & More",
      image: "./src/assets/atlantic2.jpg",
      description: "Experience an unforgettable coastal expedition from Faro to Benagil Cave, Marinha Beach and more. Explore the stunning cliffs, swim in crystal-clear waters, and take in breathtaking views.",
    },
    {
      title: "Lagos: Dolphin Watching Half-Day Cruise & Water Activities",
      image: "./src/assets/atlantic3.jpg",
      description: "Departing from Lagos Marina, this half day cruise is a great combination of dolphin watching, staggering views, and fun water activities. Suitable for all ages and family-friendly.",
    },
    {
      title: "Funchal: Scuba Diving Experience for Beginners",
      image: "./src/assets/atlantic4.jpg",
      description: "Have your first scuba diving experience in Funchal’s marine protected area under the supervision of a PADI professional. Practice in a pool, learn how to breathe, and get up-close to colorful fish.",
    },
  ];

  return (
    <div className="block">
      <h1>Exploring the Atlantic Ocean</h1>
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
