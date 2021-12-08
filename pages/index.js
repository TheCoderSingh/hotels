import Head from "next/head";

import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import LocationBar from "../components/LocationBar";

export default function Home() {
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
				</main>

				<footer></footer>
			</Box>
		</Box>
	);
}
