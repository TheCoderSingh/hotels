import { Grid } from "@chakra-ui/react";

import Hotel from "./Hotel";

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
				<Hotel hotel={hotel} key={hotel.id} />
			))}
		</Grid>
	);
};

export default Hotels;
