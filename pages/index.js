import Highlight from 'react-highlight.js'
import Head from 'next/head'
import React from "react";
import {CardHeader, Divider, IconButton, Toolbar} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Visibility} from "@material-ui/icons";
import Router from "next/router";
import Header from "../utils/Header";

export default class Home extends React.Component {
    state = {
        items: null,
        loading: true,
        max: 0,
        isSearch: false,
        query: ''
    }

    async componentDidMount() {
        this.setState({
            items: await (await fetch('/api/posts')).json(),
            max: await (await fetch('/api/posts/length')).json()
        })
    }

    render() {
        return (
            <div>
                <Head>
                    <title>CodeBin</title>
                </Head>
                <Header onSearch={async e => {
                    if (e.target.value !== '') {
                        this.setState({isSearch: true, query: e.target.value, items: await (await fetch(`/api/search/${e.target.value}`)).json()})
                    } else {
                        this.setState({isSearch: false})
                        return this.componentDidMount()
                    }
                }}/>
                <Toolbar/>
                <Container>
                    {this.state.items ? <InfiniteScroll next={async () => {
                        const items = await (await fetch(`${this.state.isSearch ? `/api/search/${this.state.query}` : '/api/posts'}?start=0&end=${this.state.items.length + 10}`)).json()
                        this.setState({
                            items,
                            max: await (await fetch('/api/posts/length')).json()
                        })
                    }} hasMore={this.state.max !== this.state.items.length}
                                                        loader={<CircularProgress color="primary" style={{margin: 10}}/>}
                                                        dataLength={this.state.items.length}>
                        {
                            this.state.items.map((i, k) => (
                                <Card style={{
                                    width: '100%',
                                    marginTop: 10
                                }} key={k} variant="outlined">
                                    <CardHeader title={i.title} action={<IconButton onClick={() => Router.push('/posts/[id]', `/posts/${i.id}`)}>
                                        <Visibility/>
                                    </IconButton>}/>
                                    <Divider/>
                                    <div style={{paddingLeft: 10, paddingRight: 10}}>
                                        <Highlight>
                                            {(() => {
                                                const it = i.content.split('\n')
                                                if (it.length > 3) {
                                                    return it.slice(0,2) + '\n...'
                                                } else {
                                                    return it.join('\n')
                                                }
                                            })()}
                                        </Highlight>
                                    </div>
                                </Card>
                            ))
                        }
                    </InfiniteScroll> : '로딩중...'}
                </Container>
            </div>
        )
    }
}
