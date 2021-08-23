import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// Material UI
import { Button, Typography, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import temp_product_img from '../../uploads/images/fruits/blueberries/joanna-kosinska-4qujjbj3srs-unsplash.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 auto',
    display: 'flex',
    flexFlow: 'wrap',
  },
  media: {
    height: 250,
    flex: '100%',
    objectFit: 'contain',
  },
  content: {
    flex: '100%',
    minHeight: 155,
  },
  linkContainer: {
    alignSelf: 'flex-end',
  },
  linkBtn: {
    color: 'inherit',
    textDecoration: 'none',
  },
});
// _id: "6122b8202500c68c7a9a5692"
// ​​
// description: "Organically grown in the richest soil available."
// ​​
// listed: "true"
// ​​
// name: "Cucumbers"
// ​​
// price: "3.99"
// ​​

const ProductCard = (props) => {
  const classes = useStyles();
  return (
    <>
      {' '}
      <Card className={classes.root}>
        {/* <CardActionArea> */}
        <CardMedia
          className={classes.media}
          image={props.image || temp_product_img}
          title='Image Card'
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.title || 'Product Title'}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.description ||
              `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio, adipisci nisi? Quae sit, et expedita libero facilis
              corporis, nostrum nesciunt porro id iure dicta vitae ut quasi
              mollitia, officia ipsam!`}
          </Typography>
        </CardContent>
        {/* </CardActionArea> */}
        <CardActions className={classes.linkContainer}>
          <Button size='small' color='primary'>
            <Link
              to={`/products/${props.productLink}`}
              className={classes.linkBtn}
            >
              View Product
            </Link>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
