import SimpleImageSlider from "react-simple-image-slider";
import { Box } from "@chakra-ui/layout";

import Navbar from "../../components/Navbar";
import { baseUrl, getData } from "../../utils/api";

const HotelDetails = ({ hotelDetails, hotelPhotos }) => {
	const images = hotelPhotos.hotelImages.slice(0, 10).map((image) => ({
		url: image.baseUrl.replace("{size}", "z"),
	}));

	console.log(images);

	return (
		<Box>
			<Navbar />
			<Box m="25px auto 0 auto" w="896px">
				<SimpleImageSlider
					width={896}
					height={504}
					images={images}
					showBullets={true}
					showNavs={true}
				/>
			</Box>
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
