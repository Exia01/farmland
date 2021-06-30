// Material Ui
import { Container, Grid, Typography } from '@material-ui/core';

//styles
import styles from './account.module.css';

function Account() {
  return (
    <Container>
      <Grid container justify='center' className={styles.gridContainer}>
        <Grid item xs={12} container justify='center'>
          <Typography variant='h4' gutterBottom>
            My Account
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.orderContainer}>
          Order History
        </Grid>
        <Grid item xs={12} sm={6} className={styles.accountDetailsContainer}>
          Account Details
        </Grid>
      </Grid>
    </Container>
  );
}

export default Account;
