import Navbar from './components/Navbar';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/' element={<Welcome />} />
			</Routes>
		</>
	);
}
export default App;
