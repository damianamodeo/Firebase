import { fdb } from '@SERVICES/firebase/config';
import Button from '@UICOMPONENTS/inputs/Button';
import {
	doc,
	runTransaction,
	arrayUnion,
	arrayRemove,
	onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

type TransactionsType = {
	children?: any;
};

const Transactions = ({ children }: TransactionsType) => {
	const [addresses, setAddresses] = useState([]);
	const [streets, setStreets] = useState([]);

	const addToArray = async () => {
		const docRef = doc(fdb, 'Congregation', 'addresses');
		try {
			await runTransaction(fdb, async (transaction) => {
				const sfDoc = await transaction.get(docRef);
				if (sfDoc.exists()) {
					transaction.set(
						docRef,
						{
							notAtHomes: arrayUnion({
								userID: 12,
								mapID: 12,
								suburb: 'Thornton',
								street: 'Woodlands Drive',
								houseNumber: '59',
								unitNumber: '5',
								timeStamp: new Date(),
								lat: -32.7730588,
								lng: 151.5851958,
							}),
						},
						{ merge: true }
					);
					return;
				}
			});

			console.log('Transaction successfully committed!');
		} catch (e) {
			console.log('Transaction failed: ', e);
		}
	};

	const removeFromArray = async (address: any) => {
		const docRef = doc(fdb, 'Congregation', 'addresses');
		try {
			await runTransaction(fdb, async (transaction) => {
				const sfDoc = await transaction.get(docRef);
				if (sfDoc.exists()) {
					const test = transaction.set(
						docRef,
						{
							notAtHomes: arrayRemove(address),
						},
						{ merge: true }
					);

					console.log('🚀  ~  awaitrunTransaction  ~  test', test);

					return;
				}
			});

			console.log('Transaction successfully committed!');
		} catch (e) {
			console.log('Transaction failed: ', e);
		}
	};

	useEffect(() => {
		const unsub = onSnapshot(doc(fdb, 'Congregation', 'addresses'), (doc) => {
			console.log('Current data: ', doc.data()?.notAtHomes);
			setAddresses(doc.data()?.notAtHomes);
		});

		// const q = query(notAtHomes, where("cong", "==", "mmm"));
		// const unsubscribe = onSnapshot(q, (snapshot) => {
		//   setAddresses(
		//     snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]
		//   );
		// });

		return unsub;
	}, []);

	const displaySuggestions = function (predictions: any, status: any) {
		if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
			alert(status);
			return;
		}
		setStreets(predictions);
	};

	const searchStreets = (suburb: string) => {
		const service = new google.maps.places.AutocompleteService();
		service.getQueryPredictions({ input: 'Metford' }, displaySuggestions);
	};

	const test = () => {
    const pyrmont = { lat: -33.866, lng: 151.196 };
    const pyrmont2 = { lat: -32.7867003, lng: 151.6187442 };
		const map = new google.maps.Map(document.getElementById('map'), {
			center: pyrmont,
			zoom: 17,
			mapId: '8d193001f940fde3',
		});

		// Create the places service.
		const service = new google.maps.places.PlacesService(map);
		service.nearbySearch(
      { location: pyrmont, radius: 5000, type: "store" },
			(results, status, pagination) => {
				if (status !== 'OK' || !results) return;

        results.forEach((result:any)=>{

          console.log(result.name)
        }

        )
			}
		);
	};

	return (
		<div className={`m-auto p-12`}>
      
			<Button
				clickAction={addToArray}
				color="primary"
			>
				Add Address to Not At Homes
			</Button>
			<Button
				clickAction={() => test()}
				color="primary"
			>
				Remove Address from Not At Homes
			</Button>
		</div>
	);
};

export default Transactions;
