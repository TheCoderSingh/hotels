import Head from "next/head";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Hotels</title>
				<meta
					name="description"
					content="Search rooms, prices and more from many hotels around the world!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>Hello, world!</main>

			<footer></footer>
		</div>
	);
}
