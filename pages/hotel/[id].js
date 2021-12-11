import SimpleImageSlider from "react-simple-image-slider";
import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";

import Navbar from "../../components/Navbar";
import { baseUrl, getData } from "../../utils/api";
import LocationImage from "../../assets/location.png";

const HotelDetails = ({ hotelDetails, hotelPhotos }) => {
	const images = hotelPhotos.hotelImages.slice(0, 10).map((image) => ({
		url: image.baseUrl.replace("{size}", "z"),
	}));

	return (
		<Box>
			<Navbar />
			<Box m="25px auto 0 auto" w="896px">
				<Heading as="h3" mb={3}>
					{hotelDetails.data.body.propertyDescription.name}
				</Heading>
				<SimpleImageSlider
					width={896}
					height={504}
					images={images}
					showBullets={true}
					showNavs={true}
				/>
				<Box cursor="pointer">
					<a
						href={
							hotelDetails.data.body.propertyDescription.mapWidget
								.staticMapUrl
						}
						target="_blank"
					>
						<Flex alignItems="center" mt={3}>
							<Image
								src={LocationImage}
								width="30px"
								height="28px"
							/>
							<Text color="#777" fontSize="0.8em">
								{
									hotelDetails.data.body.propertyDescription
										.address.fullAddress
								}
							</Text>
						</Flex>
					</a>
				</Box>
				<Box mt={4}>
					<Flex wrap="wrap" justifyContent="space-between">
						{hotelDetails.data.body.overview.overviewSections.map(
							(amenity) => (
								<Box>
									<Heading fontSize="18px">
										{amenity.title}
									</Heading>
									<Text>
										{amenity.content.map((amenity) => (
											<Text>- {amenity}</Text>
										))}
									</Text>
								</Box>
							)
						)}
					</Flex>
				</Box>
				<Box mt={5}>
					<Heading fontSize="24px" mb={1}>
						Hotel Amenities
					</Heading>
					<hr />
					<Flex justifyContent="space-between">
						{hotelDetails.data.body.amenities[0].listItems.map(
							(amenity) => (
								<Box mt={3}>
									<Heading fontSize={18}>
										{amenity.heading}
									</Heading>
									{amenity.listItems.map((amenity) => (
										<Text fontSize="0.8em">
											- {amenity}
										</Text>
									))}
								</Box>
							)
						)}
					</Flex>
				</Box>
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
