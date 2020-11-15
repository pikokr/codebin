import React, {Component} from 'react';
import Header from "../../../utils/Header";
import Toolbar from "@material-ui/core/Toolbar";
import {CardHeader, Container, Divider, Typography} from "@material-ui/core";
import Highlight from "react-highlight.js";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import {withRouter} from "next/router";

class Post extends Component {

    state = {
        i: null
    }

    async componentDidMount() {
        this.setState({
            item: await fetch('/api/posts/' + window.location.pathname.split('/').pop()).then(res => res.json())
        })
    }

    render() {
        const i = this.state.item

        return (
            <div>
                <Header/>
                <Toolbar/>
                <Container>
                    {
                        i ? <Card style={{
                            width: '100%',
                            marginTop: 10
                        }} variant="outlined">
                            <CardHeader title={i.title}/>
                            <Divider/>
                            <div style={{paddingLeft: 10, paddingRight: 10}}>
                                <Typography variant="h6">
                                    Code
                                </Typography>
                                <Highlight>
                                    {i.content}
                                </Highlight>
                                <Typography variant="h6">
                                    Raw
                                </Typography>
                                <textarea rows={10} style={{
                                    width: '100%'
                                }} value={i.content} onChange={()=>null}/>
                            </div>
                        </Card> : <CircularProgress/>
                    }
                </Container>
            </div>
        );
    }
}

export default withRouter(Post);
