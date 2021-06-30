import { useState, useContext } from 'react';
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

  console.log(`Props: ${props}`);

  const onChangeHandler = (e) => {
    setCurrentQty(e.target.value);
  };

  return (
    <>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <img
              src={temp_product_img}
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
            <Grid item xs={12}>
              <Typography variant='h4'>Product Detail Title</Typography>
              <Typography variant='h5'>$0.00</Typography>
              <Typography variant='body1'>8 In Stock </Typography>
              <Divider light className={classes.hrDivider} />
            </Grid>
            <Grid
              item
              xs={12}
              container
              spacing={0}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                praesentium, dolor tempore commodi accusamus vero laborum
                aperiam illo fuga veniam quibusdam perferendis eveniet alias est
                ab minima. Itaque dolor voluptatem quod placeat quaerat sunt
                quam molestias delectus, ut ipsa officiis. Obcaecati
                perferendis, quia sunt voluptatem corporis illum cupiditate quos
                tempore sint voluptatum iste vel nesciunt. Corrupti debitis
                voluptates iusto quo, dolor nobis animi ipsum deleniti.{' '}
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
      </Container>
    </>
  );
};

export default ProductDetail;
