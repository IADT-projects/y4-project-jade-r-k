import Carousel from 'react-bootstrap/Carousel';
import { Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CarouselComponent = () => {
    return (
        <>
        <Carousel fade interval={3500}>
      <Carousel.Item>
        <img
          className="d-block w-100" height={725}
          src="https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
        <h1 class="f1">Welcome to the Interactive Design</h1>
        <h3 class="f2">View artwork in the gallery</h3>
        <Button className="f2" component={Link} to='/interactive/gallery' variant="contained">Gallery</Button>
        <br></br>
        <br></br>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" height={725}
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3 class="f2">Reach out using the contact form</h3>
        <Button className="f2" component={Link} to='/interactive/form' variant="contained">Contact Form</Button>
        <br></br>
        <br></br>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" height={725}
          src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 class="f2">Check out the static design</h3>
        <Button className="f2" component={Link} to='/static/' variant="contained">Static</Button>
        <br></br>
        <br></br>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    );
};

export default CarouselComponent;