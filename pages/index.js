import Head from "next/head";

import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import LocationBar from "../components/LocationBar";
import Hotels from "../components/Hotels";
import { baseUrl, getData } from "../utils/api";

export default function Home({ hotels }) {
	return (
		<Box>
			<Head>
				<title>Hotels</title>
				<meta
					name="description"
					content="Search rooms, prices and more from many hotels around the world!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box>
				<header>
					<Navbar />
				</header>

				<main>
					<LocationBar />
					<Hotels hotels={hotels} />
				</main>

				<footer></footer>
			</Box>
		</Box>
	);
}

export async function getStaticProps() {
	const hotels = await getData(
		`${baseUrl}/properties/list?destinationId=1506246&pageNumber=1&pageSize=10&checkIn=2021-12-08&checkout=2021-12-10&adults1=1`
	);

	return {
		props: {
			hotels: hotels.data.body.searchResults.results,
		},
	};
}
