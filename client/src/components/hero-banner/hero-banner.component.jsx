import { Link } from 'react-router-dom';

// css
import styles from './hero-banner.module.css';
import heroBackgroundImage from '../../uploads/images/banners/michael-bourgault-YvvHEQNgMcU-unsplash-v2.jpg';
import logo from '../../uploads/images/icons/farmLogo.png';
// jss
// import useStyles from './hero-banner.styles';

// Material Ui
import { Container, Grid, Paper } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export default function HeroBanner() {
  // const classes = useStyles
  return (
    <div
      className={styles.root}
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.contentContainer}>
          <div className={styles.imgDiv}>
            <img src={logo} alt='logo' />
          </div>
          <div className={styles.item}>
            <Link to='/shop'>
              <p className={styles.title}>Shop Now</p>
              <p>
                {' '}
                <ShoppingBasketIcon />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <Container className={classes.indexSet}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paperDiv} elevation={0}>
              <div className={classes.titleContainer}>
                <div className={classes.logo}>
                  <img src={logo} alt='logo' />
                </div>
                <div className={classes.btnBox}>
                  <p classes={classes.title}>FARMLAND</p>
                  <p classes={classes.titleIcon}>
                    Shop now <span>Icon</span>
                  </p>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container> */
}
