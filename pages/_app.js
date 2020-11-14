import '../styles/globals.css'
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <link rel='stylesheet' href='https://highlightjs.org/static/demo/styles/railscasts.css'/>
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
