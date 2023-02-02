import Input from 'src/submodules/UIComponents/src/components/inputs/Input';
import FormikForm from 'src/submodules/UIComponents/src/components/inputs/FormikForm';

type AuthType = {
	children?: any;
};

const Auth = ({ children }: AuthType) => {
	return (
		<div className={``}>
			Auth
			{children}
			<FormikForm
				initialValues={null}
				onSubmit={() => {
					return;
				}}
				validationSchema={null}
			>
        <Input inputType='email' label='Email' name='email' placeholder='Email' ></Input>
      </FormikForm>
      
		</div>
	);
};

export default Auth;
