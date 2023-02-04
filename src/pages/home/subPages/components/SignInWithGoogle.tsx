import Button from '../../../../submodules/UIComponents/src/components/inputs/Button';
import { auth, googleProvider } from '../../../../services/config';
import {
	signInWithPopup,
	onAuthStateChanged,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

type AuthType = {
	children?: any;
};

const Auth = ({ children }: AuthType) => {
	const [currentUser, setCurrentUser] = useState<any>('Logged Out');

	const signInWithGoogle = async (data: any) => {
		try {
			await signInWithPopup(auth, googleProvider);
		} catch (err) {
			alert(err);
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

				<div className="mx-6 p-10 grid gap-4">
					<Button
						color="secondary"
						clickAction={signInWithGoogle}
						longPressAction={signInWithGoogle}
					>
						Sign in with Google
					</Button>
				</div>
		</div>
	);
};

export default Auth;
