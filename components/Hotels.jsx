import Image from "next/image";
import ReactStars from "react-rating-stars-component";

import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Grid, GridItem } from "@chakra-ui/react";

import defaultHome from "../assets/defaulthome.jpg";

const Hotels = ({ hotels }) => {
	return (
		<Grid
			templateColumns="repeat(auto-fit, minmax(240px, 1fr))"
			gap={4}
			justifyItems="center"
			maxW="90%"
			margin="40px auto 0 auto"
		>
			{hotels.map((hotel) => (
				<GridItem key={hotel.id}>
					<Image
						src={hotel.optimizedThumbUrls.srpDesktop || defaultHome}
						width={300}
						height={180}
					/>
					<Grid
						templateColumns="80% 20%"
						justifyContent="space-between"
						alignItems="center"
					>
						<GridItem>
							<Heading
								size="sm"
								// whiteSpace="nowrap"
								// overflow="hidden"
								// maxW="220"
							>
								{hotel.name.split(",")[0]}
							</Heading>
							<Text fontSize="0.8em">
								{hotel.address.locality}, {hotel.address.region}
							</Text>
							<Flex alignItems="center">
								<Text fontSize="0.8em" mr={1}>
									Guest Rating:
								</Text>
								<ReactStars
									count={5}
									edit={false}
									isHalf
									value={hotel.starRating}
								/>
							</Flex>
						</GridItem>
						<GridItem justifySelf="center">
							<Text
								bg="#ed5a5a"
								p="2"
								textAlign="center"
								color="#fff"
							>
								{hotel.ratePlan.price.current}
							</Text>
						</GridItem>
					</Grid>
				</GridItem>
			))}
		</Grid>
	);
};

export default Hotels;
