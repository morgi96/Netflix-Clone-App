import axios from 'axios';
import { useEffect, useState } from 'react';

function RowVertical({ dataURL, title }) {
	useEffect(() => {
		axios.get(dataURL).then((response) => {
			setMovies(response.data.results);
		});
	}, [dataURL]);

	return <div>RowVertical</div>;
}

export default RowVertical;
