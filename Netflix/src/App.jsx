import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectRoute from './components/ProtectRoute';
// import { RecoilRoot } from 'recoil';

function App() {
	return (
		<>
			<AuthContextProvider>
				{/* <RecoilRoot> */}
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/home' element={<Home />} />
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
				{/* </RecoilRoot> */}
			</AuthContextProvider>
		</>
	);
}
export default App;
