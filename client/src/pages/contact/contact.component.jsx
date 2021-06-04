import React from 'react';
import { Container, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
// import useStyles from '../../components/header/header.styles';
import styles from './contact.module.css';
import logo from '../../uploads/images/icons/farmLogo.png';
import contactBanner from '../../uploads/images/banners/megan-thomas-xMh_ww8HN_Q-unsplash.jpg';

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
});

const Contact = () => {
    const classes = useStyles();

    return (
        <div>
        <Container>
            <div
                className={styles.root}
                style={{ backgroundImage: `url(${contactBanner})`}}
                >
                <div className={styles.overlay}>
                    <div className={styles.contentContainer}>
                        <div className={styles.imgDiv}>
                            <img src={logo} alt='logo' />
                        </div>
                        <Typography 
                            variant='h1'
                            component='h1'
                            align='center'
                            color='black'
                            gutterBottom>
                            CONTACT US
                        </Typography>
                    </div>
                </div>
            </div>
        </Container>
        {/* <Container> */}
            <Grid container spacing={3}>
                <Grid item xs='12'>
                    <Typography 
                        variant='h4' 
                        align='center' 
                        gutterBottom> 
                    Questions? Ask Us!
                    </Typography>
                </Grid>
                <Grid item xs='12' container spacing={3} justify='center'>
                    <form noValidate autoComplete='off'>
                        <Grid item xs='12' md='6'>
                            <TextField 
                                label='Name'
                                className={classes.field}
                                variant='outlined'
                                fullWidth>
                            </TextField>
                        </Grid>
                        <Grid item xs='12' md='6'>
                            <TextField 
                                label='Email'
                                className={classes.field}
                                variant='outlined'
                                fullWidth>
                            </TextField>
                        </Grid>
                        <Grid item xs='12'>
                            <TextField 
                                label='Message'
                                className={classes.field}
                                variant='outlined'
                                fullWidth>
                            </TextField>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        {/* </Container> */}
        </div>
    )
}


export default Contact;