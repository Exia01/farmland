import { useContext } from 'react';
import ProductCard from '../product-card/product-card.component';
import { ProductContext } from '../../contexts/product.context';

// Tools
import { getRandom } from '../../utils/productPicker';

// Material Ui
import { Typography, Grid, Button } from '@material-ui/core';
//Styles
import useStyles from './homepage-product-segment.styles';

export default function HomepageProductSegment() {
  const classes = useStyles();
  const { products } = useContext(ProductContext);
  const randomlyPickedProductsArr = getRandom(products, 3);
  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer} justify='center'>
        <Grid item xs={12}>
          <hr className={classes.sectionBorder} />
        </Grid>
        <Grid
          item
          container
          xs={12}
          justify='center'
          className={classes.titleBtnLink}
        >
          <Grid
            xs={12}
            sm
            container
            justify='center'
            className={classes.titleHeader}
          >
            <Typography variant='h2' gutterBottom component='h2'>
              Our Delicious Products
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm
            container
            alignItems='center'
            justify='center'
            className={classes.btnLink}
          >
            <Button variant='outlined' color='primary'>
              View All Products
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <hr className={classes.sectionBorder} />
        </Grid>
      </Grid>

      {/* Products Grid */}

      <Grid
        
        className={classes.productDisplay}
      >
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
    </div>
  );
}
