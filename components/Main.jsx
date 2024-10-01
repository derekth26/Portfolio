import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import MediaCard1 from "./MediaCard1";
import MediaCard2 from "./MediaCard2";
import MediaCard3 from "./MediaCard3";
import MediaCard4 from "./MediaCard4";
import MediaCard5 from "./MediaCard5";

export default function Main() {
    return (
        <div className="container">
            <div className="top">
                <div>
                    <Link to="/adventure"> 
                        <MediaCard1 />
                    </Link>
                </div>
                <div>
                    <Link to="/luxury"> {/* Link to Adventure page */}
                        <MediaCard2 />
                    </Link>
                </div>
                <div>
                    <Link to="/magic"> {/* Link to Adventure page */}
                        <MediaCard3 />
                    </Link>
                </div>
            </div>

            <div className="bot">
                <div>
                    <Link to="/mystery"> {/* Link to Adventure page */}
                        <MediaCard4 />
                    </Link>
                </div>
                <div>
                    <Link to="/adrenaline"> {/* Link to Adventure page */}
                        <MediaCard5 />
                    </Link>
                </div>
            </div>
        </div>
    );
}
