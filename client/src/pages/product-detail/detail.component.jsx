import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

// Components
import ThreeProductsCard from '../../components/three-products-card/three-products-card.component';
//contexts
import { ProductContext } from '../../contexts/product.context';

// Styles
import useStyles from './detail.styles';

// Material Ui
import {
  Button,
  Typography,
  Container,
  Grid,
  Divider,
} from '@material-ui/core';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';

import temp_product_img from '../../uploads/images/fruits/blueberries/joanna-kosinska-4qujjbj3srs-unsplash.jpg';

const ProductDetail = (props) => {
  const classes = useStyles();
  const [currentQty, setCurrentQty] = useState(1);
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const foundProduct = products.filter(function (product) {
    return product._id === id;
  });
  const onChangeHandler = (e) => {
    setCurrentQty(e.target.value);
  };

  return (
    <>
      <Container className={classes.root}>
        {/* Product Grid */}
        {foundProduct.length > 0 ? (
          <Grid container>
            <Grid item xs={12} md={8} container>
              <img
                src={foundProduct[0].thumbnail}
                alt='product-img'
                className={classes.productImage}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              container
              className={classes.sideCol}
              justify='center'
            >
              <Grid item xs={12} >
                <Typography variant='h4' gutterBottom>{foundProduct[0].name}</Typography>
                <Typography variant='h5' gutterBottom>$0.00</Typography>
                <Typography variant='body1' gutterBottom>8 In Stock </Typography>
                <Divider light className={classes.hrDivider} />
              </Grid>
              <Grid
                item
                xs={12}
                container
                // direction='column'
                className={`size-choice ${classes.sizeOptsWrapper}`}
              >
                <Grid item xs={12} className='span-container'>
                  <Typography variant='body2'>Size</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={9}
                  md={12}
                  container
                  // justify='space-between'
                  className={`${classes.btnSpace} ${classes.btnVariantWrapper}`}
                >
                  <Button
                    className={classes.btnSizeVariant}
                    variant='outlined'
                    color='primary'
                  >
                    Option #1
                  </Button>
                  <Button
                    className={classes.btnSizeVariant}
                    variant='outlined'
                    color='primary'
                  >
                    Option #2
                  </Button>
                  <Button
                    className={classes.btnSizeVariant}
                    variant='outlined'
                    color='primary'
                  >
                    Option #3
                  </Button>
                </Grid>

                <Grid item xs={12} className='span-container'>
                  <Typography variant='body2'>Quantity</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={10}
                  className={classes.qtyWrapper}
                  container
                  alignItems='stretch'
                >
                  <Button
                    className={classes.qtyBtn}
                    disableElevation
                    variant='contained'
                    color='secondary'
                  >
                    +
                  </Button>
                  <input
                    min='0'
                    max='9999'
                    maxLength='4'
                    inputMode='numeric'
                    pattern='[0-9]*'
                    value={currentQty}
                    onChange={onChangeHandler}
                    className={classes.qtyInput}
                  />
                  <Button
                    className={classes.qtyBtn}
                    disableElevation
                    variant='contained'
                    color='secondary'
                  >
                    -
                  </Button>
                </Grid>
                <Grid item xs={12} className={classes.spacer}>
                  <Button
                    type='submit'
                    className={classes.btnSpace}
                    variant='contained'
                    color='primary'
                    fullWidth
                  >
                    Add to Cart
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body2'>
                  {foundProduct[0].description}
                </Typography>

                {/* <Divider light />

              <Typography variant='body2'>
                Nostrum quasi itaque et deserunt id debitis hic voluptatibus
                obcaecati, praesentium, dolorum sed explicabo incidunt aliquid
                assumenda non laudantium molestiae quis consequuntur inventore
                molestias beatae saepe ipsam? Mollitia, molestiae dolores
                sapiente doloribus soluta explicabo architecto.
              </Typography> */}
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid item xs={10} container justify='center'>
            {/* if not product found */}
            <Typography variant='h2' gutterBottom component='h2'>
              No Products Found
            </Typography>
          </Grid>
        )}
        <Grid
          item
          container
          justify='center'
          xs
          className={classes.suggestionsTitle}
        >
          <Typography variant='h2' gutterBottom component='h2'>
            You may also like
          </Typography>
        </Grid>
        <ThreeProductsCard />
      </Container>
    </>
  );
};

export default ProductDetail;
