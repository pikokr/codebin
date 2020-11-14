import Head from 'next/head'
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {CardContent, CardHeader, Grid, Toolbar, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";

export default class Home extends React.Component {
    state = {
        items: Array.from(new Array(1000).keys()).map(r=>({title:`ITEM${r}`,content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ducimus, esse facilis hic minima modi nihil repellendus reprehenderit? Ad commodi dolorem explicabo fuga non quaerat qui quos sapiente veritatis voluptate.'})),
        loading: true
    }

    render() {
        return (
            <div>
                <Head>
                    <title>CodeBin</title>
                </Head>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6">
                            CodeBin
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar/>
                <Container>
                    <Grid container spacing={2}>
                        {
                            this.state.items.map(i => (
                                <Grid item xs={12}>
                                    <Card>
                                        <CardHeader title={i.title}/>
                                        <CardContent>
                                            {i.content}
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </div>
        )
    }
}
