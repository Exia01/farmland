import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../contexts/product.context';

// Material UI
import {
  Container,
  Grid,
  Paper,
  makeStyles,
  Typography,
} from '@material-ui/core';

// Component
import ProductCard from '../../components/product-card/product-card.component';

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
});

const Products = () => {
  const classes = useStyles();
  const { products } = useContext(ProductContext);

  useEffect(async () => {
    // let prod = await fetch('/api/products').then(res => res.json());
    // setAllProducts(prod);
    // -- TEMP --> Loop through all products
    // return (allProducts.map(product => (
    //     <Grid item xs={12} sm={6} md={4} spacing={3}>
    //         <ProductCard product={product}/>
    //     </Grid>
    //     ))
    // )
  }, []);

  return (
    <Container>
      <Grid container  spacing={3}  alignItems="stretch"  justify='center'>
        {products ? (
          products.map((individualProduct) => (
            <Grid item xs={12} sm={6} md={4} key={individualProduct._id}>
              <ProductCard
                image={individualProduct.thumbnail}
                title={individualProduct.name}
                description={individualProduct.description}
                productLink={individualProduct._id}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={10} md container justify='center'>
            {/* if not product found */}
            <Typography variant='h2' gutterBottom component='h2'>
              No Products Available
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Products;
