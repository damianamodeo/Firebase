import Form from '@PAGES/home/subPages/notAtHomes/Form';
import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Button from '@UICOMPONENTS/inputs/Button';

const header = ({ setCurrentSubpage }: any) => {
	return (
		<Header
			headerLeft=""
			title="Record"
			headerRight="" //{<div onClick={() => {setCurrentSubpage(1, 1);}}>+</div>}
		></Header>
	);
};

const content2 = ({ setCurrentSubpage }: any) => {
	return <Content>
		<div>
			asdf
		</div>
	</Content>;
};

const pageOne = { header, content2 };

export default pageOne;
