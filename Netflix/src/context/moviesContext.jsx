import { createContext, useState, useEffect, useRef, useContext } from 'react';
import requests from '../Requests';
import axios from 'axios';

// Created Context
const MoviesContext = createContext();

// My own hook to prevent .Consumer using on Context Provider
export function useMovies() {
	return useContext(MoviesContext);
}

// Provider with data
export function MoviesProvider({ children }) {
	const [randomMovie, setRandomMovie] = useState(null);

	useEffect(() => {
		axios.get(requests.popular).then(({ data: { results } }) => {
			const randomMovie = results[Math.floor(Math.random() * results.length)];
			setRandomMovie(randomMovie);
		});
	}, []);

	return (
		<MoviesContext.Provider value={randomMovie}>
			{children}
		</MoviesContext.Provider>
	);
}

export default MoviesProvider;
