import { useHistory } from 'react-router-dom';
import ThreeProductsCard from './../three-products-card/three-products-card.component';
// Material Ui
import { Typography, Grid, Button } from '@material-ui/core';
//Styles
import useStyles from './homepage-product-segment.styles';

export default function HomepageProductSegment() {
  const classes = useStyles();
  let history = useHistory();

  function onClickHandler() {
    history.push('/products');
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer} justifyContent='center'>
        <Grid item xs={12}>
          <hr className={classes.sectionBorder} />
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent='center'
          className={classes.titleBtnLink}
        >
          <Grid container justifyContent='center' className={classes.titleHeader}>
            <Typography variant='h2' gutterBottom component='h2'>
              Our Delicious Products
            </Typography>
          </Grid>
          <Grid
            container
            alignItems='center'
            justifyContent='center'
            className={classes.btnLink}
          >
            <Button variant='outlined' color='primary' onClick={onClickHandler}>
              View All Products
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <hr className={classes.sectionBorder} />
        </Grid>
      </Grid>

      {/* Products Grid */}
      <ThreeProductsCard />
    </div>
  );
}
