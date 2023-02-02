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

const SignUpWithGoogle = ({ children }: AuthType) => {
	const signInWithGoogle = async (data: any) => {
		try {
			await signInWithPopup(auth, googleProvider);
		} catch (err) {
			alert(err);
		}
	};

	return (
		<div className="mx-auto p-10 grid gap-4 w-96">
			<Button
				color="primary"
				clickAction={signInWithGoogle}
				longPressAction={signInWithGoogle}
			>
				Sign in with Google
			</Button>
		</div>
	);
};

export default SignUpWithGoogle;
