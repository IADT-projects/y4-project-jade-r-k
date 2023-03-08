import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const StaticCards = () => {
    return (
        <>
        <CardGroup>
          <Card className="center text-center" style={{height: '300px', margin: '10px'}}>
            <Card.Img style={{height: '300px'}} src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"/>
            <Card.ImgOverlay>
              <Card.Body>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              <Button className="f2" component={Link} to='/static/gallery' variant="contained">Gallery</Button>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
          <Card className="center text-center" style={{height: '300px', margin: '10px'}}>
            <Card.Img style={{height: '300px'}} src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"/>
            <Card.ImgOverlay>
              <Card.Body>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              <Button className="f2" component={Link} to='/static/form' variant="contained">Contact Form</Button>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
          <Card className="center text-center" style={{height: '300px', margin: '10px'}}>
            <Card.Img style={{height: '300px'}} src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"/>
            <Card.ImgOverlay>
              <Card.Body>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              <Button className="f2" component={Link} to='/interactive/' variant="contained">Interactive</Button>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
        </CardGroup>
        </>
    );
};

export default StaticCards;