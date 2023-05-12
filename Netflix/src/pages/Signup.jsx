import { UserAuth } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

function Signup() {
	const { signUp } = UserAuth();

	const handleSubmit = async (email, password) => {
		await signUp(email, password);
	};

	return (
		<AuthForm
			title='Sign Up'
			actionText='Sign Up'
			accountText='Sign In'
			onSubmit={handleSubmit}
		/>
	);
}

export default Signup;
