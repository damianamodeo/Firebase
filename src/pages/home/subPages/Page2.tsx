import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Carousel from '@UICOMPONENTS/containers/Carousel';
import SignUpWithGoogle from '../../../components/SignInWithGoogle';
import LogIn from '../../../components/SignIn';
import Transactions from '@PAGES/home/subPages/subPages/Transactions';
import Map from '@PAGES/home/subPages/subPages/Transactions copy';

const header = ({ setCurrentSubpage }: any) => {
	return (
		<Header
			headerLeft={
				<div
					className="p-2"
					onClick={() => {
						setCurrentSubpage(1, -1);
					}}
				>
					Back
				</div>
			}
			title="CRUD"
			headerRight={''}
		></Header>
	);
};

const content2 = ({ setCurrentSubpage }: any) => {
	return (
		<Content>
			<div id="map"></div>
			<Carousel
				carouselItems={[{ title: 'Transaction', content: <Transactions /> }, { title: 'Map', content: <Map /> }]}
			></Carousel>
		</Content>
	);
};

const pageOne = { header, content2 };

export default pageOne;
