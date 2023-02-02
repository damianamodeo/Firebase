import Input from '../submodules/UIComponents/src/components/inputs/Input';
import FormikForm from '../submodules/UIComponents/src/components/inputs/FormikForm';
import Button from '../submodules/UIComponents/src/components/inputs/Button';
import { auth, googleProvider } from '../services/config';
import {
	createUserWithEmailAndPassword,
	signInWithPopup,
	signOut,
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail, signInWithEmailAndPassword
} from 'firebase/auth';
import { useEffect, useState } from 'react';

type AuthType = {
	children?: any;
};

const Auth = ({ children }: AuthType) => {
	const [currentUser, setCurrentUser] = useState<any>('Logged Out');
	const signUp = async (data: any) => {
		try {
			await createUserWithEmailAndPassword(auth, data.email, data.password);
		} catch (err) {
			alert(err);
		}
	};
	const signIn = async (data: any) => {
		try {
			await signInWithEmailAndPassword(auth, data.email, data.password);
		} catch (err) {
			alert(err);
		}
	};

	const signInWithGoogle = async (data: any) => {
		try {
			await signInWithPopup(auth, googleProvider);
		} catch (err) {
			alert(err);
		}
	};

	const logOut = async () => {
		try {
			await signOut(auth);
		} catch (err) {
			alert(err);
		}
	};

	const resetPassword = (email: any) => {
		try {
			return sendPasswordResetEmail(auth, email);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
		});
		return unsubscribe;
	}, []);

	return (
		<div className={``}>
			<div>{currentUser && currentUser.email} </div>
			<FormikForm
				initialValues={{ email: '', password: '' }}
				onSubmit={(data: any) => {
					// signUp(data);
					signIn(data);
					// resetPassword(data.email);
					
				}}
				// validationSchema={null}
			>
				<div className="mx-6 p-10 grid gap-4">
					<Input
						inputType="email"
						label="Email"
						name="email"
						placeholder="Email"
					></Input>
					<Input
						inputType="password"
						label="Password"
						name="password"
						placeholder="Password"
					></Input>

					<Button
						color="secondary"
						clickAction={'submit'}
					>
						Sign In
					</Button>

					<Button
						color="secondary"
						clickAction={signInWithGoogle}
						longPressAction={signInWithGoogle}
					>
						Sign in with Google
					</Button>

					<Button
						color="secondary"
						clickAction={logOut}
						longPressAction={logOut}
					>
						Log Out
					</Button>

					<Button
						color="secondary"
						clickAction={logOut}
						longPressAction={logOut}
					>
						Reset Password
					</Button>
				</div>
			</FormikForm>
		</div>
	);
};

export default Auth;
