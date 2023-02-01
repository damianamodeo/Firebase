import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Button from '@UICOMPONENTS/inputs/Button';
import { useState } from 'react';

const header = () => {
	return (
		<Header
			headerLeft="Left 2"
			title="Two"
			headerRight="Right 2"
		></Header>
	);
};

const content2 = ({ setCurrentSubpage }: any) => {

	const [state, setState] = useState(false)
	
	return (
		<Content>
			This is Page Two content
			{state && "hello"}
			<Button
				color="primary"
				clickAction={() => {
					setCurrentSubpage(2, 1);
				}}
			>
				Forward to page 3
			</Button>
			<Button
				color="primary"
				clickAction={() => {
					setCurrentSubpage(0, -1);
				}}
			>
				Back to page 1
			</Button>
			<Button
				color="primary"
				clickAction={() => {
					setState(!state);
				}}
			>
				state
			</Button>
		</Content>
	);
};

const pageOne = { header, content2 };

export default pageOne;
