import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
        <div class="hero-image">
                        <div class="hero-text">
                            <h1 class="f1">Welcome to the Static Design</h1>
                            <h3 class="f2">View artwork in the gallery</h3>
                            <Button className="f2" component={Link} to='/static/gallery' variant="contained">Gallery</Button>
                        </div>
                    </div>
        </>
    );
};

export default Hero;