//Styles
import { Grid, Typography } from '@material-ui/core';
import useStyles from './footer.style';

export default function Footer() {
  return (
    <Grid container spacing={2} justify='center'>
      <Grid item xs={12} lg={3}>
        <Typography variant='body1'>
          Credits to the following artist for the pictures:
        </Typography>
      </Grid>
      <Grid item xs={12} lg={12} style={{ padding: 0 }}></Grid>
      <Grid item xs={12} lg={2}>
        <Typography variant='caption' display='block' gutterBottom>
          <a href='https://icons8.com/icon/12131/family'>
            Family icon by Icons8
          </a>
        </Typography>
      </Grid>
      <Grid item xs={12} lg={2}>
        <Typography variant='caption' display='block' gutterBottom>
          <a href='https://icons8.com/icon/20873/organic-food'>
            Organic Food icon by Icons8
          </a>
        </Typography>
      </Grid>
      <Grid item xs={12} lg={2}>
        <Typography variant='caption' display='block' gutterBottom>
          <a href='https://icons8.com/icon/DHWWJczuijHH/renewable-energy'>
            Renewable Energy icon by Icons8
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
}
