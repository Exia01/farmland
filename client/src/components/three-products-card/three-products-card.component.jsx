import React from 'react';

// Material Ui
import { Typography, Grid, Button } from '@material-ui/core';

// Styles
import useStyles from './three-products-card.styles';

export default function ThreeProductsCard() {
  const classes = useStyles();
  const { products } = useContext(ProductContext);
  const randomlyPickedProductsArr = getRandom(products, 3);
  return (
    <>
      {/* Products Grid */}

      <Grid className={classes.productDisplay}>
        {randomlyPickedProductsArr.length > 0 ? (
          randomlyPickedProductsArr.map((product) => (
            <Grid item xs={12} sm={10} md={4}>
              <ProductCard
                key={product._id}
                image={product.thumbnail}
                title={product.name}
                description={product.description}
                productLink={product._id}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={10} md={8} lg={12} className='mt-3'>
            <Typography component='h2'>No Results</Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
}
