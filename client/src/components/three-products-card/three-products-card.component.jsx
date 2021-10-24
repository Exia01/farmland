import { useContext } from 'react';
import { ProductContext } from '../../contexts/product.context';

//tools
import { getRandom } from './../../utils/productPicker';

import ProductCard from '../product-card/product-card.component';

// Material Ui
import { Typography, Grid } from '@material-ui/core';

// Styles
import useStyles from './three-products-card.styles';

export default function ThreeProductsCard() {
  const classes = useStyles();
  const { products } = useContext(ProductContext);
  const randomlyPickedProductsArr = getRandom(products, 3);
  return (
    <>
      {/* Products Grid */}

      <Grid className={classes.root}>
        {randomlyPickedProductsArr.length > 0 ? (
          randomlyPickedProductsArr.map((product) => (
            <Grid item xs={12} sm={10} md={4} key={product._id}>
              <ProductCard
                image={product.thumbnail}
                title={product.name}
                description={product.description}
                productLink={product._id}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={10} md={8} lg={10} className='mt-3' justifyContent='center'>
            <Typography component='body2' variant='h5'>
              No Products Available
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
}
