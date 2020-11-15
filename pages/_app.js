import '../styles/globals.css'
import React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

function MyApp({Component, pageProps}) {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (<>
        <Head>
            <link rel='stylesheet' href='https://highlightjs.org/static/demo/styles/railscasts.css'/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <CssBaseline/>
        <Component {...pageProps} />
    </>)
}

export default MyApp
