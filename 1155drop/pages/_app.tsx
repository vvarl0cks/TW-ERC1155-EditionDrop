import { Sepolia } from "@thirdweb-dev/chains";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";

// This is the chain your dApp will work on.
const activeChain = "Sepolia";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
    clientId={process.env.TW_API_KEY}
    activeChain={Sepolia}>
      <Head>
        <title>thirdweb Edition Drop Minting Customizable Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Thirdweb's Edition Drop contract and create a customizable Edition Drop minting page"
        />
        <meta
          name="keywords"
          content="Thirdweb, thirdweb Edition drop, how to make thirdweb nft drop, how to make nft collection thirdweb"
        />
      </Head>
      <Component {...pageProps} />

    </ThirdwebProvider>
  );
}

export default MyApp;
