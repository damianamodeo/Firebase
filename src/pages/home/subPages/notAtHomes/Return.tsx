import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Button from '@UICOMPONENTS/inputs/Button';

const header = ({ setCurrentSubpage }: any) => {
	return (
		<Header
			headerLeft="Left 1"
			title="One"
			headerRight={<div onClick={() => {setCurrentSubpage(1, 1);}}>+</div>}
		></Header>
	);
};

const content2 = ({ setCurrentSubpage }: any) => {
	return (
		<Content>
			<div className="mx-auto my-4">
				<Button
					color="primary"
					clickAction={() => {
						setCurrentSubpage(1, 1);
					}}
				>
					Add
				</Button>
				<Button
					color="primary"
					clickAction={() => {
						setCurrentSubpage(2, 1);
					}}
				>
					Forward to page 3
				</Button>
			</div>
		</Content>
	);
};

const pageOne = { header, content2 };

export default pageOne;
