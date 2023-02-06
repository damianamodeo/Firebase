import { fdb } from '@SERVICES/firebase/config';
import Button from '@UICOMPONENTS/inputs/Button';
import FormikForm from '@UICOMPONENTS/inputs/FormikForm';
import Input from '@UICOMPONENTS/inputs/Input';
import {
	doc,
	runTransaction,
	arrayUnion,
	arrayRemove,
	onSnapshot,
} from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';

type TransactionsType = {
	children?: any;
};

const Transactions = ({ children }: TransactionsType) => {
	const [addresses, setAddresses] = useState([]);
	const [streets, setStreets] = useState([]);
	const ref = useRef(document.createElement('input'))

	const search = (v) => {
		const woodlandsEstate2 = new google.maps.LatLng( -32.7867003, 151.6187442)
		

    const center = { lat: -32.7867003, lng: 151.6187442 };
		const defaultBounds = {
			north: center.lat + 0.01,
			south: center.lat - 0.01,
			east: center.lng + 0.01,
			west: center.lng - 0.01,
		};

		const options = {
			bounds: defaultBounds,
			fields: ["formatted_address", "geometry", "name", "address_components"],
			strictBounds: true,
			types: ["address"],
		};

		const autocomplete = new google.maps.places.Autocomplete(ref, options).getPlace()

		console.log("🚀  ~  search  ~  autocomplete", autocomplete)

		
	};

	return (
		<div className={`m-auto p-12`}>
			<FormikForm
				initialValues={{ search: '' }}
				onSubmit={search}
			>
				<input className="bg-grey-300" type="text" ref={ref} id="autocomplete"  />
				<Input
					inputType="text"
					label="Search"
					name="search"
				></Input>
				<Button
					clickAction="submit"
					color="primary"
				>
					Submit
				</Button>
			</FormikForm>
		</div>
	);
};

export default Transactions;
