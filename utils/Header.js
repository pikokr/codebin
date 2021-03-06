import React from 'react'
import {fade, IconButton, Toolbar, Typography} from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import InputBase from "@material-ui/core/InputBase"
import {Search} from "@material-ui/icons"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Link from "next/link";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            '&:focus': {
                width: '100%'
            }
        }
    },
    mobileSearchIcon: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    searchContainer: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))


const Header = ({onSearch}) => {
    const classes = useStyles()
    const [mobileSearch, setMobileSearch] = React.useState(false)

    const searchArea = onSearch &&
        <>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <Search/>
                </div>
                <InputBase
                    placeholder="검색"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{'aria-label': 'search'}}
                    onChange={onSearch}
                />
            </div>
        </>

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">
                    <Link href="/">
                        CodeBin
                    </Link>
                </Typography>
                <div style={{flexGrow: 1}}/>
                <div className={classes.searchContainer}>
                    {
                        searchArea
                    }
                </div>
                <IconButton onClick={()=>setMobileSearch(true)} color="inherit" className={classes.mobileSearchIcon}>
                    <Search/>
                </IconButton>
                <Dialog open={mobileSearch} onBackdropClick={()=>setMobileSearch(false)}>
                    {searchArea}
                </Dialog>
            </Toolbar>
        </AppBar>
    )
}

export default Header
