// css
import classes from './hero-banner.module.css';
import heroBackgroundImage from '../../uploads/images/banners/michael-bourgault-YvvHEQNgMcU-unsplash-v2.jpg';

// jss
// import useStyles from './hero-banner.styles';

// Material Ui
import { Container, Grid, Paper } from '@material-ui/core';

export default function HeroBanner() {
  // const classes = useStyles
  return (
    <div
      className={classes.root}
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}
    >
      <div className={classes.backgroundImage}></div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <div className={classes.titleContainer}>
                <p classes={classes.heroImage}>
                  <img src='' alt='' srcset='' />
                </p>
                <p classes={classes.title}>FARMLAND</p>
                <p classes={classes.btnTitle}>
                  Shop now <span>Icon</span>
                </p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
