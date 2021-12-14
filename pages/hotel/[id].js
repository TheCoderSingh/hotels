import SimpleImageSlider from "react-simple-image-slider";
import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

import Navbar from "../../components/Navbar";
import LocationImage from "../../assets/location.png";
import { baseUrl, getData } from "../../utils/api";
import ReactStars from "react-rating-stars-component";

const HotelDetails = ({ hotelDetails, hotelPhotos }) => {
	const {
		overview,
		propertyDescription,
		guestReviews,
		atAGlance,
		amenities,
		hygieneAndCleanliness,
		smallPrint,
	} = hotelDetails.data.body;

	const images = hotelPhotos.hotelImages.slice(0, 10).map((image) => ({
		url: image.baseUrl.replace("{size}", "z"),
	}));

	return (
		<Box>
			<Navbar />
			<Box maxW="70%" m="40px auto 0 auto">
				<Heading as="h3" mb={3}>
					{propertyDescription.name}
				</Heading>
				<hr />
				<Flex mt={6} justifyContent="center">
					<Box>
						<SimpleImageSlider
							width={696}
							height={400}
							images={images}
							showBullets={true}
							showNavs={true}
						/>
						<Box cursor="pointer">
							<a
								href={
									propertyDescription.mapWidget.staticMapUrl
								}
								target="_blank"
								rel="noreferrer"
							>
								<Flex alignItems="center" mt={3}>
									<Image
										src={LocationImage}
										width="30px"
										height="28px"
									/>
									<Text color="#777" fontSize="0.8em">
										{
											propertyDescription.address
												.fullAddress
										}
									</Text>
								</Flex>
							</a>
							<Flex alignItems="center">
								<ReactStars
									count={10}
									edit={false}
									isHalf
									value={eval(
										guestReviews.brands.formattedRating
									)}
								/>
								<Text ml={1} fontSize="0.8em">
									{guestReviews.brands.formattedRating}/
									{guestReviews.brands.formattedScale}
								</Text>
							</Flex>
						</Box>
					</Box>
					<Box ml={10} mt={3}>
						<Heading fontSize="18px">
							{overview.overviewSections[0].title}
						</Heading>
						{overview.overviewSections[0].content.map(
							(amenity, index) => (
								<Text lineHeight="1.8em" key={index}>
									- {amenity}
								</Text>
							)
						)}
					</Box>
				</Flex>
				<Grid templateColumns="30% 30% 40%">
					<GridItem justifySelf="center">
						<Heading fontSize="1.4em">At a Glance</Heading>
						<hr />
						<Text>
							Check-in Time:
							{atAGlance.keyFacts.arrivingLeaving[0].replace(
								"Check-in time",
								""
							)}
						</Text>
						<Text>
							Check-out Time:
							{atAGlance.keyFacts.arrivingLeaving[1].replace(
								"Check-out time is",
								""
							)}
						</Text>
						<Box mt={2}>
							<Heading fontSize="1em">
								Check-in Instructions
							</Heading>

							{atAGlance.keyFacts.specialCheckInInstructions.map(
								(instruction, index) => (
									<Text key={index}>{instruction}</Text>
								)
							)}
						</Box>
						<Box mt={2}>
							<Heading fontSize="1em">
								Required at check-in
							</Heading>
							{atAGlance.keyFacts.requiredAtCheckIn.map(
								(requirement, index) => (
									<Text key={index}>- {requirement}</Text>
								)
							)}
						</Box>
					</GridItem>
					<GridItem justifySelf="center">
						<Box>
							<Heading fontSize="1.4em">
								Travelling/Internet
							</Heading>
							<hr />
							{Object.values(
								atAGlance.travellingOrInternet.travelling
							).map((item, index) =>
								item.length !== 0 ? (
									<Text key={index}>- {item}</Text>
								) : null
							)}
							{Object.values(
								atAGlance.travellingOrInternet.internet
							).map((item, index) =>
								item.length !== 0 ? (
									<Text key={index}>- {item}</Text>
								) : null
							)}
						</Box>
						<Box mt={3}>
							<Heading fontSize="1.4em">
								Other Information
							</Heading>
							<Text>
								-{" "}
								{atAGlance.transportAndOther.transport.parking}
							</Text>
							<Text>
								- {atAGlance.transportAndOther.otherInformation}
							</Text>
						</Box>
					</GridItem>
					<GridItem justifySelf="center">
						<Heading fontSize="1.4em">Amenities</Heading>
						<hr />
						<Flex>
							<Box>
								<Heading fontSize="1em">
									{amenities[0].heading}
								</Heading>

								<Box>
									{amenities[0].listItems.map(
										(item, index) => (
											<Box key={index}>
												<Heading fontSize="0.9em">
													{item.heading}
												</Heading>
												<Text>
													{item.listItems.map(
														(amenity, index) => (
															<Text key={index}>
																- {amenity}
															</Text>
														)
													)}
												</Text>
											</Box>
										)
									)}
								</Box>
							</Box>

							<Box>
								<Heading fontSize="1em">
									{amenities[1].heading}
								</Heading>

								<Box>
									{amenities[1].listItems.map(
										(item, index) => (
											<Box key={index}>
												<Heading fontSize="0.9em">
													{item.heading}
												</Heading>
												<Text>
													{item.listItems.map(
														(amenity, i) => (
															<Text key={i}>
																- {amenity}
															</Text>
														)
													)}
												</Text>
											</Box>
										)
									)}
								</Box>
							</Box>
						</Flex>
					</GridItem>
					<GridItem justifySelf="center">
						<Heading fontSize="1.4em">
							{hygieneAndCleanliness.title}
						</Heading>
						<hr />
						<Text>
							{
								hygieneAndCleanliness.healthAndSafetyMeasures
									.description
							}
						</Text>
						<Heading fontSize="0.9em">Measures</Heading>
						{hygieneAndCleanliness.healthAndSafetyMeasures.measures.map(
							(measure, index) => (
								<Text key={index}>- {measure}</Text>
							)
						)}
					</GridItem>
					<GridItem justifySelf="center">
						<Heading fontSize="1.4em">Policies</Heading>
						<hr />
						{smallPrint.mandatoryFees.map((fee, index) => (
							<Text key={index}>
								- {fee.replace(/(<([^>]+)>)/gi, "")}
							</Text> // Strip out HTML tags
						))}

						{smallPrint.optionalExtras.map((extra, index) => (
							<Text key={index}>
								- {extra.replace(/(<([^>]+)>)/gi, "")}
							</Text>
						))}

						{smallPrint.policies.map((policy, index) => (
							<Text key={index}>
								- {policy.replace(/(<([^>]+)>)/gi, "")}
							</Text>
						))}
					</GridItem>
				</Grid>
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
