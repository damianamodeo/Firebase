import Content from '../../../submodules/UIComponents/src/components/containers/Content';
import Header from '../../../submodules/UIComponents/src/components/containers/Header';
import { useEffect, useState } from 'react';
import Carousel from '@UICOMPONENTS/containers/Carousel';
import ResetPassword from './components/ResetPassword';
import SignUp from './components/SignUp';
import SignUpWithGoogle from './components/SignUpWithGoogle';
import LogOut from './components/LogOut';

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
					Previous
				</div>
			}
			title="Sign Up"
			headerRight={
				<div
					className="p-2"
					onClick={() => {
						setCurrentSubpage(1, 1);
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
					{ title: 'Sign Up', content: <SignUp></SignUp> },
					{ title: 'Reset', content: <ResetPassword></ResetPassword> },
					{ title: 'Sign Up With Google', content: <SignUpWithGoogle></SignUpWithGoogle> },
					{ title: 'Log Out', content: <LogOut></LogOut> },
				]}
			></Carousel>
		</Content>
	);
};

const pageOne = { header, content2 };

export default pageOne;
