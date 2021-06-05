import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, makeStyles } from '@material-ui/core';


const Products = () => {

    const [allProducts, setAllProducts] = useState([])

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper>Product #1</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper>Product #1</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper>Product #1</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper>Product #1</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper>Product #1</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper>Product #1</Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Products;