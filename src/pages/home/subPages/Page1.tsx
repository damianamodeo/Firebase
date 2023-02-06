import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Carousel from '@UICOMPONENTS/containers/Carousel';
import ResetPassword from '../../../components/ResetPassword';
import SignUp from '../../../components/SignUpWithPassword';
import SignUpWithGoogle from '../../../components/SignInWithGoogle';
import LogOut from '../../../components/LogOut';
import LogIn from '../../../components/SignIn';

const header = ({ setCurrentSubpage }: any) => {
	return (
		<Header
			headerLeft={
				<div
					className="p-2"
					onClick={() => {
						setCurrentSubpage(0, -1);
					}}
				>
					Back
				</div>
			}
			title="Authentication"
			headerRight={
				<div
					className="p-2"
					onClick={() => {
						setCurrentSubpage(2, 1);
					}}
				>
					Next
				</div>
			}
		></Header>
	);
};

const content2 = ({ setCurrentSubpage }: any) => {
	return (
		<Content>
			<Carousel
				carouselItems={[
					{ title: 'Log In', content: <LogIn></LogIn> },
					{ title: 'Sign In With Google', content: <SignUpWithGoogle></SignUpWithGoogle> },
					{ title: 'Log Out', content: <LogOut></LogOut> },
					{ title: 'Sign Up', content: <SignUp></SignUp> },
					{ title: 'Reset', content: <ResetPassword></ResetPassword> },
				]}
			></Carousel>
		</Content>
	);
};

const pageOne = { header, content2 };

export default pageOne;
