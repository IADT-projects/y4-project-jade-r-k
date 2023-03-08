import Navbar from '../../components/StaticNav'
import Hero from '../../components/Hero'
import Cards from '../../components/StaticCards'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <Navbar />
        <Hero />
        <div class="banner-white">
                        <h3 class="f2">View the breathtaking artwork from the Art Institute of Chicago API</h3>
                        <h5 class="f2">This site is for comparing static and interactive design.</h5>
                    </div>
                    <Cards />
                    <div class="center-text banner-color">
                        <h3>Want to get in contact?</h3>
                        <h5>Reach out using the contact form</h5>
                        <Button className="f2" component={Link} to='/static/form' color='inherit' variant="contained">Contact Form</Button>
                    </div>
        </>
    );
};

export default Home;