import React, { useState, useContext } from 'react';
import { ButtonGroup, Button, Typography, Container, Grid, makeStyles, Paper, Divider } from '@material-ui/core'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import temp_product_img from '../../uploads/images/fruits/blueberries/joanna-kosinska-4qujjbj3srs-unsplash.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    container: {
        marginTop: 30,
        marginBottom: 50
    },
    media: {
        height: 500,
    },
    buttonSpace: {
        margin: 10
    },

})

const ProductDetail = (props) => {
    const classes = useStyles();

    console.log(`Props: ${props}`);

    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <img src={temp_product_img} alt="product-img" className={classes.media}/>
                    </Grid>
                    <Grid item xs={12} md={4} container>
                        <Grid item xs={12}>
                            <Typography variant='h4'>Product Detail Title</Typography>
                            <Typography variant='h5'>$ 0.00</Typography>
                            <Divider light />
                        </Grid>
                        <Grid item xs={12} container spacing={3} direction='column' className='size_choice'>
                            <Typography variant='p'>Size</Typography>
                            <Grid item xs={12}>
                                    <Button className={classes.buttonSpace} variant="outlined" color="primary">Option #1</Button>
                                    <Button className={classes.buttonSpace} variant="outlined" color="primary">Option #2</Button>
                                    <Button className={classes.buttonSpace} variant="outlined" color="primary">Option #3</Button>
                            </Grid>

                            <Typography variant='p'>Quantity</Typography>
                            <Grid item xs={12} md={4}>
                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                    <Button>+</Button>
                                    <Typography variant='h4' align='center'>1</Typography>
                                    <Button>-</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography variant='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic praesentium, dolor tempore commodi accusamus vero laborum aperiam illo fuga veniam quibusdam perferendis eveniet alias est ab minima. Itaque dolor voluptatem quod placeat quaerat sunt quam molestias delectus, ut ipsa officiis. Obcaecati perferendis, quia sunt voluptatem corporis illum cupiditate quos tempore sint voluptatum iste vel nesciunt. Corrupti debitis voluptates iusto quo, dolor nobis animi ipsum deleniti. </Typography>

                            <Divider light/>

                            <Typography variant='p'>Nostrum quasi itaque et deserunt id debitis hic voluptatibus obcaecati, praesentium, dolorum sed explicabo incidunt aliquid assumenda non laudantium molestiae quis consequuntur inventore molestias beatae saepe ipsam? Mollitia, molestiae dolores sapiente doloribus soluta explicabo architecto.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ProductDetail;