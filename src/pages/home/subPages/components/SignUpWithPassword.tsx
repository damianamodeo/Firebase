import Input from '../../../../submodules/UIComponents/src/components/inputs/Input';
import FormikForm from '../../../../submodules/UIComponents/src/components/inputs/FormikForm';
import Button from '../../../../submodules/UIComponents/src/components/inputs/Button';
import { auth } from '../../../../services/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

type AuthType = {
	children?: any;
};

const Auth = ({ children }: AuthType) => {
	const signUp = async (data: any) => {
		try {
			await createUserWithEmailAndPassword(auth, data.email, data.password);
		} catch (err) {
			alert(err);
		}
	};

	return (
		<div className={``}>
			<FormikForm
				initialValues={{ email: '', password: '' }}
				onSubmit={(data: any) => {
					signUp(data);
				}}
				// validationSchema={null}
			>
				<div className="mx-auto p-10 grid gap-4 w-96">
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
						color="primary"
						clickAction={'submit'}
					>
						Sign In
					</Button>
				</div>
			</FormikForm>
		</div>
	);
};

export default Auth;
