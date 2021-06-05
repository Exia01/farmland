import React, { useState, useContext } from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core'
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
    media: {
        height: 250,
    },
})

const ProductCard = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={temp_product_img}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Product Title
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, adipisci nisi? Quae sit, et expedita libero facilis corporis, nostrum nesciunt porro id iure dicta vitae ut quasi mollitia, officia ipsam!
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductCard;