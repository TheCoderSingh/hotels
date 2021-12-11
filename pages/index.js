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
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
					integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
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
		`${baseUrl}/properties/list?destinationId=1506246&pageNumber=1&pageSize=12&checkIn=2021-12-08&checkout=2021-12-10&adults1=1`
	);

	return {
		props: {
			hotels: hotels.data.body.searchResults.results,
		},
	};
}
