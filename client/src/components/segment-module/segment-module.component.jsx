import { Typography, Grid } from '@material-ui/core';
//Styles
import useStyles from './segment-module.styles';

function SegmentModule() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        className={classes.gridContainer}
        justify='center'
      >
        <Grid item xs={12} md={4} className={classes.item}>
          <div className={classes.itemImage}>
            <img
              src='https://img.icons8.com/color/96/000000/family.png'
              alt='Family Owned Icon'
            />
          </div>
          <Typography variant='h6'>Family owned</Typography>
        </Grid>

        <Grid item xs={12} md={4} className={classes.item}>
          <div className={classes.itemImage}>
            <img
              src='https://img.icons8.com/fluency/96/000000/-electricity-triangle-sign.png'
              alt='Renewable Energy Icon'
            />
          </div>
          <Typography variant='h6'>100% Renewable Resources</Typography>
        </Grid>

        <Grid item xs={12} md={4} className={classes.item}>
          <div className={classes.itemImage}>
            {/* <img
              src='https://via.placeholder.com/150'
              alt='C/O https://placeholder.com/'
            /> */}
            <img
              src='https://img.icons8.com/color/96/000000/organic-food.png'
              alt='Organic Icon'
            />
          </div>
          <Typography variant='h6'>100% ORGANIC & NON-GMO</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default SegmentModule;
