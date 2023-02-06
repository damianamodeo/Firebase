import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Carousel from '@UICOMPONENTS/containers/Carousel';
import ResetPassword from '../../../components/ResetPassword';
import SignUp from '../../../components/SignUpWithPassword';
import SignUpWithGoogle from '../../../components/SignInWithGoogle';
import LogOut from '../../../components/LogOut';
import LogIn from '../../../components/SignIn';
import Button from '@UICOMPONENTS/inputs/Button';

const header = ({ setCurrentSubpage }: any) => {
	return (
		<Header
			headerLeft={<div className=""></div>}
			title="Firebase"
			headerRight={
				<div
					className=""
				>
				</div>
			}
		></Header>
	);
};

const content2 = ({ setCurrentSubpage }: any) => {
	return (
		<Content>
			<div className='m-auto'>
				<div className="w-96">

				<Button
					color="primary"
					clickAction={() => setCurrentSubpage(1, 1)}
					>
					Authentication
				</Button>
					</div>
				<br />
				<div className="w-96">
				<Button
					color="primary"
					clickAction={() => setCurrentSubpage(2, 1)}
					>
					CRUD
				</Button>
					</div>
			</div>
		</Content>
	);
};

const pageOne = { header, content2 };

export default pageOne;
