// import { createContext, useContext, useEffect, useState } from 'react';
// import { API_KEY } from '../Requests';

// const ApiContext = createContext();

// export function ApiContextProvider({ children }) {
// 	const [randomMovie, setRandomMovie] = useState(null);
// 	const [movies, setMovies] = useState([]);

// 	useEffect(() => {
// 		axios.get(requests.popular).then(({ data: { results } }) => {
// 			const randomMovie = results[Math.floor(Math.random() * results.length)];
// 			setRandomMovie(randomMovie);
// 			setMovies(results);
// 		});
// 	}, []);

// 	const getVideoUrl = (id) => {
// 		return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
// 	};

// 	const getCastUrl = (id) => {
// 		return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
// 	};

// 	const getMovieBySearch = (term) => {
// 		return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}`;
// 	};
// }

// export function ApiData() {
// 	return useContext(ApiContext);
// }
