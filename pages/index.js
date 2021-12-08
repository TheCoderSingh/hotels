import Head from "next/head";

import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";

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

				<main>Hello, world!</main>

				<footer></footer>
			</Box>
		</Box>
	);
}
