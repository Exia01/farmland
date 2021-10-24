import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

// Components
import ThreeProductsCard from '../../components/three-products-card/three-products-card.component';
//contexts
import { ProductContext } from '../../contexts/product.context';

//styles
import styles from './detail.module.css';

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
  // const classes = useStyles();
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
      <Container className={`${styles.productDetailPage} ${styles.root}`}>
        {/* Product Grid */}
        {foundProduct.length > 0 ? (
          <Grid container className={styles.imageInfoContainer}>
            {/* Product Image */}
            <Grid item xs={12} sm className={styles.imageCol}>
              <img
                // src={foundProduct[0].thumbnail}
                src={temp_product_img}
                alt='product-img'
                className={styles.productImage}
              />
            </Grid>
            {/* Product info/opts */}
            <Grid
              item
              xs={12}
              sm={4}
              container
              className={styles.productInfoCol}
              justifyContent='center'
            >
              <Grid item xs={12} className={styles.productInfoDiv}>
                {/* product name */}
                <Typography variant='h4' gutterBottom>
                  {foundProduct[0].name}
                </Typography>
                {/* product price */}
                <Typography variant='h5' gutterBottom>
                  ${foundProduct[0].price}
                </Typography>
                {/* stock availability */}
                <Typography variant='body1' gutterBottom>
                  8 In Stock
                </Typography>
                <Divider light className={styles.hrDivider} />
              </Grid>

              <Grid
                item
                xs={12}
                container
                className={`size-choice ${styles.productSizeOpts}`}
              >
                <Grid item xs={12}>
                  <Typography component='h6' variant='h6' gutterBottom>
                    Size
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs
                  container
                  // justify='space-between'
                  className={`${styles.btnSpace} ${styles.btnVariantWrapper}`}
                >
                  <Button
                    className={styles.btnSizeVariant}
                    variant='outlined'
                    color='primary'
                  >
                    Option #1
                  </Button>
                  <Button
                    className={styles.btnSizeVariant}
                    variant='outlined'
                    color='primary'
                  >
                    Option #2
                  </Button>
                  <Button
                    className={styles.btnSizeVariant}
                    variant='outlined'
                    color='primary'
                  >
                    Option #3
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Typography component='h6' variant='h6'>
                    Quantity
                  </Typography>
                </Grid>
                <Grid item xs={12} md={10} className={styles.qtyDiv}>
                  <Button
                    className={styles.qtyBtn}
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
                    className={styles.qtyInput}
                  />
                  <Button
                    className={styles.qtyBtn}
                    disableElevation
                    variant='contained'
                    color='secondary'
                  >
                    -
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type='submit'
                    className={styles.btnSpace}
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
          <Grid item xs={10} md container justifyContent='center'>
            {/* if not product found */}
            <Typography variant='h2' gutterBottom component='h2'>
              No Products Found
            </Typography>
          </Grid>
        )}
        <Grid
          item
          container
          justifyContent='center'
          xs
          className={styles.suggestionsTitle}
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
