import Input from '../../../../submodules/UIComponents/src/components/inputs/Input';
import FormikForm from '../../../../submodules/UIComponents/src/components/inputs/FormikForm';
import Button from '../../../../submodules/UIComponents/src/components/inputs/Button';
import { auth, googleProvider } from '../../../../services/config';
import {
	createUserWithEmailAndPassword,
	signInWithPopup,
	signOut,
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

type AuthType = {
	children?: any;
};

const LogOut = ({ children }: AuthType) => {
	const [currentUser, setCurrentUser] = useState<any>('Logged Out');

	const logOut = async () => {
		try {
			await signOut(auth);
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
		<div className="mx-auto p-10 grid gap-4 w-96">
			<div className="text-center">{currentUser && currentUser.email} </div>
			<Button
				color="secondary"
				clickAction={logOut}
				longPressAction={logOut}
			>
				Log Out
			</Button>
		</div>
	);
};

export default LogOut;
