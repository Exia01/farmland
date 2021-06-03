import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import useStyles from '../../components/header/header.styles';

//  import contactBanner from '../../uploads/images/banners/';
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
                        <Typography 
                            variant='h3'
                            component='h1'
                            align='center'
                            color='black'
                            gutterBottom>
                            Contact Component
                        </Typography>
                    </div>
                </Grid>
            </Grid>

        </Container>
    )
}


export default Contact;