import * as React from 'react';
import videoBanner from "../assets/videoBanner.mp4"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function HeroBanner() {
    
    return (
        <div className="banner">
            <video src={videoBanner} autoPlay loop muted></video>

            <div className="content">
            <h1>Adventure Awaits</h1>
            
                <p>Scroll Down to Get Started <ArrowDownwardIcon></ArrowDownwardIcon></p>
        
            </div>
            
        </div>

        
    )
}





