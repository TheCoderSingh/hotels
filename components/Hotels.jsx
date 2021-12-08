import Image from "next/image";
import defaultHome from "../assets/defaulthome.jpg";

import { Heading, Text } from "@chakra-ui/layout";
import { Grid, GridItem } from "@chakra-ui/react";

const Hotels = ({ hotels }) => {
	return (
		<Grid
			templateColumns="repeat(5, 1fr)"
			gap={4}
			justifyItems="center"
			maxW="1500"
			margin="40px auto 0 auto"
		>
			{hotels.map((hotel) => (
				<GridItem key={hotel.id}>
					<Image
						src={hotel.thumbnailUrl || defaultHome}
						width={300}
						height={180}
					/>
					<Heading size="sm">{hotel.name}</Heading>
					<Text>
						{hotel.address.locality}, {hotel.address.region}
					</Text>
					<Text>{hotel.guestReviews.rating} Stars</Text>
					<Text>{hotel.ratePlan.price.current}</Text>
				</GridItem>
			))}
		</Grid>
	);
};

export default Hotels;
