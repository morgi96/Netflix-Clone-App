import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

function App() {
	return (
		<>
			<AuthContextProvider>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/home' element={<Home />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/account' element={<Account />} />
				</Routes>
			</AuthContextProvider>
		</>
	);
}
export default App;
