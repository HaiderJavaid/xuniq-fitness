import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';

import useStyles from './styles';

const refreshPage = ()=>{
    setTimeout(()=>{
        window.location.reload();
    }, 100);
}

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <div className={classes.empty}>

        <Typography variant='subtitle1'>You Have No Item in your shopping cart
        </Typography> <br />
        <Button onClick={refreshPage} component={Link} to="/" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Start Adding Item</Button>
        </div>

    );

const FilledCart = () => (
    <div className={classes.background}>

    <Grid className={classes.grid} container spacing={3}>
        {cart.line_items.map((item) =>(
            <Grid item xs={12} sm={3} key={item.id}>
                <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
            </Grid>
        ))}
    </Grid>
    <div className={classes.cardDetails}>
        <Typography variant='h5'>
            Subtotal: { cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
            <Button className={classes.emptyButton} size="large" type="button" variant="outlined"  onClick={handleEmptyCart}>Empty Cart</Button>
            <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>

        </div>
    </div>
    </div>
    );

    if(!cart.line_items) return 'Loading..';

    return (
        <div className={classes.background}>

        <Container>
            <div className={classes.toolbar} />
            <h3 className={classes.title} variant='h3' >Your Shopping Cart</h3>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
        </div>
    )
}

export default Cart
