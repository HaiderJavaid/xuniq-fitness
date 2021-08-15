import React from 'react';

import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '/Users/mac/Desktop/xuniq-fitness/src/xulogo.png';

import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    const refreshPage = ()=>{
        setTimeout(()=>{
            window.location.reload();
        }, 100);
    }

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography onClick={refreshPage} component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                       <img src={logo} alt="" height="40" width="40"/>
                    </Typography>
                    
                    <div className={classes.grow} />
                    {location.pathname == '/' && (                   
                    <div className={classes.button}>
                        <IconButton className={classes.cart} component={Link} to="/cart" aria-label='Show cart item' color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Navbar
