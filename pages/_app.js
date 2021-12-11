import Router from "next/router";
import nProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
	nProgress.configure({ showSpinner: false });

	Router.events.on("routeChangeStart", () => {
		nProgress.start();
	});

	Router.events.on("routeChangeComplete", () => {
		nProgress.done();
	});

	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
