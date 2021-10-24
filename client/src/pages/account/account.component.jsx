// Material Ui
import { Button, Container, Grid, Typography } from '@material-ui/core';
import LogoutButton from '../../components/logout-button/logout-button.component';

//styles
import styles from './account.module.css';

function Account() {
  return (
    <Container>
      <Grid container justifyContent='center' className={styles.gridContainer}>
        <Grid item xs={12} container justifyContent='center'>
          <Grid item className={styles.titleContainer}>
            <Typography variant='h3' gutterBottom>
              My Account
            </Typography>
          </Grid>
          <Grid item className={styles.logoutContainer} xs={12}>
            <LogoutButton accountBtn />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.orderContainer} container>
          <Typography variant='h4' className={styles.sectionTitle}>
            Order History
          </Typography>
          <Grid item xs={12}>
            <Typography variant='body1'>
              You haven't placed any orders yet.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.accountDetailsContainer}>
          <Typography variant='h4' className={styles.sectionTitle}>
            Account Details
          </Typography>
          <Typography variant='body1'>Jose Gonzalez</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Account;
