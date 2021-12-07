import { Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

//logo
import logo from '../../uploads/images/icons/farmLogo.png'
//Banner image
import BannerImage from '../../uploads/images/banners/michael-bourgault-YvvHEQNgMcU-unsplash-v2.jpg';
// css
import styles from './style.module.css';

export default function LandingPageBanner() {
  return (
    <div
      className={styles.root}
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.contentContainer}>
          <div className={styles.imgDiv}>
            <img src={logo} alt='logo' />
          </div>
          {/* <Typography variant='h3'>FARMLAND</Typography> */}
          <div className={styles.item}>
          <Link component={RouterLink} to='/'>
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
