import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

// contexts
import { ProductContext } from '../../context/Product';

import temp_product_img from '../../uploads/images/fruits/blueberries/joanna-kosinska-4qujjbj3srs-unsplash.jpg';

// MUI
import {
  Container,
  Box,
  Typography,
  Grid,
  Divider,
  typography,
  Button,
} from '@mui/material';

export default function ProductDetail() {
  const [currentQty, setCurrentQty] = useState(1);
  let params = useParams();
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const foundProduct = products.filter(function (product) {
    return product._id === id;
  })[0];
  const onChangeHandler = (e) => {
    setCurrentQty(e.target.value);
  };

  return (
    <Container sx={{ marginTop: 1 }}>
      {foundProduct != undefined ? (
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexFlow: { xs: 'wrap' },

            //image
            '& .img-container': {
              flex: { xs: '100%' },
              backgroundColor: 'red',
              width: '100%',
              minHeight: '350px',
              '& img': {
                width: '100%',
              },
            },
            //   Opts
            '& .product-options': {
              flex: '100%',
            },
          }}
        >
          <div className='img-container'>
            <img
              // src={foundProduct[0].thumbnail}
              src={temp_product_img}
              alt='product-img'
            />
          </div>
          <div className='product-options'>
            <Grid container>
              <Grid item xs={12}>
                <Typography component='h3' variant='h3'>
                  {foundProduct.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component='p' variant='h5'>
                  ${foundProduct.price}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ color: 'divider.main', margin: '.5rem 0' }} />
              </Grid>
              {/* Btn variants */}
              <Grid container xs={12} spacing={1} marginBottom={true}>
                <Grid item xs={12}>
                  <Typography
                    component='p'
                    variant='body1'
                    marginBottom={false}
                  >
                    Size
                  </Typography>
                </Grid>
                <Grid item>
                  <Button variant='contained'>Product Option 1</Button>
                </Grid>{' '}
                <Grid item>
                  <Button variant='contained'>Opt 2</Button>
                </Grid>{' '}
                <Grid item>
                  <Button variant='contained'>Option 3</Button>
                </Grid>
                {/* //Product login on variants */}
              </Grid>
            </Grid>
          </div>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexFlow: { xs: 'wrap' },
            flex: '100%',
          }}
        >
          <Typography component='h2' variant='h5'>
            No Products Available
          </Typography>
        </Box>
      )}
      <Typography component='h2' variant='h5'>
        Related Products
      </Typography>
    </Container>
  );
}
