import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectRoute from './components/ProtectRoute';

function App() {
	return (
		<>
			<AuthContextProvider>
				<Navbar />
				<Routes>
					<Route path='/' element={<Login />} />
					<Route
						path='/home'
						element={
							<ProtectRoute>
								<Home />
							</ProtectRoute>
						}
					/>
					<Route path='/signup' element={<Signup />} />
					<Route
						path='/account'
						element={
							<ProtectRoute>
								<Account />
							</ProtectRoute>
						}
					/>
				</Routes>
			</AuthContextProvider>
		</>
	);
}
export default App;
