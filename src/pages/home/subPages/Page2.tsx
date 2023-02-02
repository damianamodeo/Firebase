import Content from '../../../submodules/UIComponents/src/components/containers/Content';
import Header from '../../../submodules/UIComponents/src/components/containers/Header';
import { useEffect, useState } from 'react';
import ResetPassword from './components/ResetPassword';

const header = ({ setCurrentSubpage }: any) => {
	return (
		<Header
			headerLeft={
				<div
					onClick={() => {
						setCurrentSubpage(0, -1);
					}}
				>
					Previous
				</div>
			}
			title="Reset Password"
			headerRight=""
		></Header>
	);
};

const content2 = ({ setCurrentSubpage }: any) => {
	return (
		<Content>
			<ResetPassword></ResetPassword>
		</Content>
	);
};

const pageOne = { header, content2 };

export default pageOne;
