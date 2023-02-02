import Content from '../../../submodules/UIComponents/src/components/containers/Content';
import Header from '../../../submodules/UIComponents/src/components/containers/Header';
import { useEffect, useState } from 'react';
import ResetPassword from './components/ResetPassword';

const header = ({ setCurrentSubpage }: any) => {
	return (
		<Header
			headerLeft={
				<div className="p-2"
					onClick={() => {
						setCurrentSubpage(0, -1);
					}}
				>
					Previous
				</div>
			}
			title="Sign Up"
			headerRight={
				<div className="p-2"
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
			<ResetPassword></ResetPassword>
		</Content>
	);
};

const pageOne = { header, content2 };

export default pageOne;
