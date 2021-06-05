import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, makeStyles } from '@material-ui/core';
import ProductCard from '../../components/product-card/product-card.component';

const useStyles = makeStyles({
    root: {
        margin: 10
    }
})

const Products = () => {
    const classes = useStyles();
    const [allProducts, setAllProducts] = useState([])

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} spacing={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} spacing={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} spacing={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} spacing={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} spacing={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} spacing={3}>
                    <ProductCard />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Products;