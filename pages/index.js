import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>CodeBin</title>
                </Head>
            </div>
        )
    }
}
