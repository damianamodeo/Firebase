import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Button from '@UICOMPONENTS/inputs/Button';

const header = () => {
	return (
		<Header
			headerLeft="Left 1"
			title="One"
			headerRight="Right 1"
		></Header>
	);
};

const content2 = ({ setCurrentSubpage }: any) => {
	return (
		<Content>
			This is Page One content
			<Button
				color="primary"
				clickAction={() => {
					setCurrentSubpage(1, 1);
				}}
			>
				Forward to page 2
			</Button>
			<Button
				color="primary"
				clickAction={() => {
					setCurrentSubpage(2, 1);
				}}
			>
				Forward to page 3
			</Button>
		</Content>
	);
};

const pageOne = { header, content2 };

export default pageOne;
