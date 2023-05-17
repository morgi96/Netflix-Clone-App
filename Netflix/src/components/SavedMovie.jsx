function SavedMovie({ movie }) {
	return (
		<img
			className={'saved--movie'}
			src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
			alt={movie?.title}
		/>
	);
}
export default SavedMovie;
