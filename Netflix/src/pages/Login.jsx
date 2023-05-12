import { UserAuth } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

function Login() {
	const { logIn } = UserAuth();

	const handleSubmit = async (email, password) => {
		await logIn(email, password);
	};

	return (
		<AuthForm
			title='Sign In'
			actionText='Sign In'
			accountText='Sign Up'
			onSubmit={handleSubmit}
		/>
	);
}

export default Login;
