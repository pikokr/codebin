import React from 'react';
import {Toolbar, Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";

const Header = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">
                    CodeBin
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
