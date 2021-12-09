import { Box } from "@chakra-ui/layout";

import Navbar from "../../components/Navbar";
import { baseUrl, getData } from "../../utils/api";

const HotelDetails = ({ hotelDetails, hotelPhotos }) => {
	return (
		<Box>
			<Navbar />
		</Box>
	);
};

export default HotelDetails;

export async function getServerSideProps({ params: { id } }) {
	const hotelDetails = await getData(
		`${baseUrl}/properties/get-details?id=${id}`
	);

	const hotelPhotos = await getData(
		`${baseUrl}/properties/get-hotel-photos?id=${id}`
	);

	return {
		props: {
			hotelDetails,
			hotelPhotos,
		},
	};
}
