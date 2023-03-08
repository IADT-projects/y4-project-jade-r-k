import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation'

const Home = () => {

    return (
        <>
        <Navigation/>
        <h1 className="f1 center-text">Welcome to the comparative analysis of static and interactive design study</h1>
        <h2 className="f2 center-text">Thank you for taking part. You will be told which button to click below in order to begin the study.</h2>
        <br></br>
        <br></br>
        <Stack spacing={2} justifyContent="center" direction="row">
        <Button component={Link} to='/static/' variant="contained">Static</Button>
        <Button component={Link} to='/interactive/' variant="contained">Interactive</Button>
        </Stack>
        </>
    );
};

export default Home;