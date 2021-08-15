import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';


const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <div id="about">
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <h2 className="mb-3" className={classes.productText}>Products</h2>
            <Grid container justify='center' spacing={4}>
                    {products.map((product)=> (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
                 ))}
            </Grid>
            
        </main>
        
      </div>

        ) ;

   

}

export default Products;