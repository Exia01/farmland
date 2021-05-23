import { Link } from 'react-router-dom';

// css
import styles from './hero-banner.module.css';
import heroBackgroundImage from '../../uploads/images/banners/michael-bourgault-YvvHEQNgMcU-unsplash-v2.jpg';
import logo from '../../uploads/images/icons/farmLogo.png';
// jss
// import useStyles from './hero-banner.styles';

// Material Ui
import { Container, Grid, Paper, Typography } from '@material-ui/core';
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
          <Typography variant='h3'>FARMLAND</Typography>
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

