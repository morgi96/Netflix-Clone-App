export const API_KEY = '38e88b677c92d9421f88622ed47e68ad';

const requests = {
	popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
	topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
	upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
	latest: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`,
	videos: `https://api.themoviedb.org/3/movie/297762?api_key=${API_KEY}&append_to_response=videos`,
};

export const getVideoUrl = (id) => {
	return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
};

export const getCastUrl = (id) => {
	return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
};

export const getMovieBySearch = (term) => {
	return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}`;
};
export default requests;
