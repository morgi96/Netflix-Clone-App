import { UserAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

function ProtectRoute({ children }) {
	const { user } = UserAuth();
	if (!user) {
		return <Navigate to='/' />;
	} else {
		return children;
	}
}

export default ProtectRoute;
