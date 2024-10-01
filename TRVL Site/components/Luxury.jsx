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
import bali1 from '../assets/bali1.jpg';
import bali2 from '../assets/bali2.jpg';
import bali3 from '../assets/bali3.jpg';
import bali4 from '../assets/bali4.jpg';
import luxbanner from '../assets/luxbanner.jpg'


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
      title: "Bali/Nusa Penida: East & West Highlights Full-Day Tour",
      image: bali1, // Use imported image
      description: "Explore the best of East and West Nusa Penida, including Kelingking Beach (T-Rex), the iconic Diamond Beach, and the Instagram-famous Molateng Treehouse.",
    },
    {
      title: "Bali: Uluwatu Kecak and Fire Dance Show Entry Ticket",
      image: bali2, // Use imported image
      description: "Watch Balinese natives perform mesmerizing Kecak dances complete with swirling flames and traditional costumes, all while the Uluwatu sun sets in the background, with this entrance ticket.",
    },
    {
      title: "Lovina/Bali: Dolphin Watching Tour, Swimming and Snorkeling",
      image: bali3, // Use imported image
      description: "Discover Lovina Beach and enjoy the sunrise in the morning while watching dolphins on a boat tour. Swim along the dolphins while hanging on the boat and snorkel in the beautiful coral reef.",
    },
    {
      title: "Ubud: All-Inclusive Tour with Optional Lunch",
      image: bali4, // Use imported image
      description: "Visit the top highlight destinations in Ubud in one day tour including the famous Ubud Monkey Forest, Ceking Rice Terrace at Tegalalang, Holy spring temple at Tirta Empul, Ubud Palace, and Ubud Art Market, and Tegenungan Waterfall.",
    },
  ];

  return (
    <div className="block">
      <div className="luxbanner">
        <h1>Luxurious Trip To Bali</h1>
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
