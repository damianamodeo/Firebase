import Form from '@PAGES/home/subPages/notAtHomes/Form';
import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Button from '@UICOMPONENTS/inputs/Button';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { fdb } from '../../../../services/config';

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

	// const notAtHomes = collection(fdb, 'notAtHomes');

	const [addresses, setAddresses] = useState([]);

	useEffect(() => {
		// const q = query(notAtHomes, where('cong', '==', 'mmm'));
		// const unsubscribe = onSnapshot(q, (snapshot: any) => {
		// 	setAddresses(
		// 		snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))[0]
		// 	);
		// });

		// return () => {
		// 	unsubscribe();
		// };
	}, []);

	return (
		<Content>
			<div></div>
		</Content>
	);
};

const pageOne = { header, content2 };

export default pageOne;
