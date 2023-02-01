import FormikForm from '@UICOMPONENTS/inputs/FormikForm';
import Input from '@UICOMPONENTS/inputs/Input';

type FormType = {
	children?: any;
};

const Form = ({ children }: FormType) => {
	return (
		<div className={``}>
			<FormikForm
				initialValues={{ locality: '' }}
				onSubmit={() => {
					return;
				}}
			>
				<Input
					inputType="text"
					label="Locality"
					name="dsf"
					key={1}
					placeholder="sdf"
				></Input>
			</FormikForm>

			{children}
		</div>
	);
};

export default Form;
