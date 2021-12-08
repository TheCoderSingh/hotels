import Link from "next/link";
import { Box, Heading } from "@chakra-ui/layout";

const Navbar = () => {
	return (
		<Box
			maxW="1280"
			margin="auto"
			p="5"
			borderBottom="1px"
			borderColor="#ddd"
		>
			<Heading color="#ed5a5a">
				<Link href="/">Hotels</Link>
			</Heading>
		</Box>
	);
};

export default Navbar;
