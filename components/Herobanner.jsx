import * as React from 'react';
import Button from '@mui/material/Button';
import videoBanner from "../assets/videoBanner.mp4"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function HeroBanner() {
    
    return (
        <div className="banner">
            <video src={videoBanner} autoPlay loop muted></video>

            <div className="content"><h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <Button variant="outlined">Scroll Down to Get Started <ArrowDownwardIcon></ArrowDownwardIcon> </Button>
            </div>
            
        </div>

        
    )
}





