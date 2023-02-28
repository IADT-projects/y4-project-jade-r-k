import axios from '../config';
import { useState, useEffect } from 'react';

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
        <h1 className="f1">Welcome to the comparative analysis of static and interactive design study</h1>
        <h2 className="f2">Thank you for taking part. You will be told which button to click below</h2>
        <p>Testing font</p>
        </>
    );
};

export default Home;