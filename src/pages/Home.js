import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
        <h1 style={{textAlign: 'center'}}>Welcome to the comparative analysis of static and interactive design study</h1>
        <h2 style={{textAlign: 'center'}}>Thank you for taking part. You will be told which button to click below in order to begin the study.</h2>
        <br></br>
        <br></br>
        <div style={{textAlign: 'center'}}>
        <Button as={Link} to='/static/'>Static</Button>{' '}
        <Button as={Link} to='/interactive/'>Interactive</Button>
        </div>
        </>
    );
};

export default Home;
