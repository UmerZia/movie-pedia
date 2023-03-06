import React from 'react'
import { useEffect } from 'react';

const API_URL = "http://www.omdbapi.com?apikey=470aaccc";

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(() => {searchMovies("Spiderman")}, []);

    return (
        <h1>React app</h1>
    );
}

export default App;