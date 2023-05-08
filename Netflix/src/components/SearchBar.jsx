import { useState } from 'react';

function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState('');

	const handleFormSubmit = (e) => {
		e.preventDefault();
		onSubmit(term);
	};
	const handleChange = (e) => {
		setTerm(e.target.value);
	};

	return (
		<>
			<form onSubmit={handleFormSubmit}>
				<input
					className='p-1 text-black outline-none w-[160px]'
					type='text'
					placeholder='Write title...'
					value={term}
					onChange={handleChange}
				></input>
			</form>
		</>
	);
}

export default SearchBar;
