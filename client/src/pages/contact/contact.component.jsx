import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import useStyles from '../../components/header/header.styles';
import styles from './contact.module.css';
import logo from '../../uploads/images/icons/farmLogo.png';
import contactBanner from '../../uploads/images/banners/megan-thomas-xMh_ww8HN_Q-unsplash.jpg';


const Contact = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item sm='12'>
                    <div
                        className=''
                        style={{ backgroundImage: `url(${contactBanner})` }}
                    >
                    </div>
                </Grid>
            </Grid>
            <div
                className={styles.root}
                style={{ backgroundImage: `url(${contactBanner})` }}
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
    )
}


export default Contact;