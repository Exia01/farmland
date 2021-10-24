//Styles
import { Grid, Typography } from '@material-ui/core';
import useStyles from './footer.style';

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      justifyContent='center'
      className={classes.root}
    >
      <Grid item xs={7} lg={4}>
        <Typography variant='body1'>
          Credits to the following artists for the following icons:
        </Typography>
      </Grid>
      <Grid item xs={7} lg={12} style={{ padding: 0 }}></Grid>
      <Grid item xs={7} lg={2}>
        <Typography variant='caption' display='block' gutterBottom>
          <a href='https://icons8.com/icon/12131/family' target="_blank" rel="noopener noreferrer">
            Family icon by Icons8
          </a>
        </Typography>
      </Grid>
      <Grid item xs={7} lg={2}>
        <Typography variant='caption' display='block' gutterBottom>
          <a href='https://icons8.com/icon/20873/organic-food' target="_blank" rel="noopener noreferrer">
            Organic Food icon by Icons8
          </a>
        </Typography>
      </Grid>
      <Grid item xs={7} lg={2}>
        <Typography variant='caption' display='block' gutterBottom>
          <a href='https://icons8.com/icon/DHWWJczuijHH/renewable-energy' target="_blank" rel="noopener noreferrer">
            Renewable Energy icon by Icons8
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
}
