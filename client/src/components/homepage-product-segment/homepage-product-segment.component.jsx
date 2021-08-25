import ThreeProductsCard from './../three-products-card/three-products-card.component';
// Material Ui
import { Typography, Grid, Button } from '@material-ui/core';
//Styles
import useStyles from './homepage-product-segment.styles';

export default function HomepageProductSegment() {
  const classes = useStyles();
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
         
            container
            justify='center'
            className={classes.titleHeader}
          >
            <Typography variant='h2' gutterBottom component='h2'>
              Our Delicious Products
            </Typography>
          </Grid>
          <Grid
          
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
      <ThreeProductsCard />
    </div>
  );
}
