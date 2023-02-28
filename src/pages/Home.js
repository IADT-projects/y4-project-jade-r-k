import axios from '../config';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

const Home = () => {
    const [artworks, setArtworks ] = useState(null);

    //get artworks from API
    useEffect(() => {
        axios.get()
        .then((response) => {
            console.log(response.data.data);
        })
        .catch((err) => {
            console.error(err);
        });
    });
    return (
        <>
        <h1 className="f1 center-text">Welcome to the comparative analysis of static and interactive design study</h1>
        <h2 className="f2 center-text">Thank you for taking part. You will be told which button to click below in order to begin the study.</h2>
        <br></br>
        <div className='center-text'>
        <Button>Static</Button>
        <Button>Interactive</Button>
        </div>
        </>
    );
};

export default Home;