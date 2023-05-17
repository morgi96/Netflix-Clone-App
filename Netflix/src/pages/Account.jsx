import SavedMovies from '../components/SavedMovies';
import SavedMovie from '../components/SavedMovie';
import SavedMoviesContext from '../context/SavedMoviesContext';
import { useEffect, useState } from 'react';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';

function Account() {
	const [movies, setMovies] = useState([]);
	const { user } = UserAuth();

	useEffect(() => {
		onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
			setMovies(doc.data()?.savedMovies);
		});
		console.log(user);
	}, [user?.email]);

	return (
		<SavedMoviesContext.Provider value={movies}>
			<div className='w-full text-white'>
				<div className='w-full bg-black h-[200px] text-center'>
					<span className='relative text-white font-bold text-4xl top-[100px]'>
						Favourite movies:
					</span>
				</div>
				<SavedMovies>
					{movies.map((movie, id) => (
						<SavedMovie key={id} movie={movie} />
					))}
				</SavedMovies>
			</div>
		</SavedMoviesContext.Provider>
	);
}

export default Account;
