import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ThreeCardsSegment from './../../components/LandingPageSegment/ThreeCardsSegment';

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
  Button,
  GlobalStyles,
  Paper,
} from '@mui/material';

export default function ProductDetail() {
  const [currentQty, setCurrentQty] = useState(1);
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const foundProduct = products.filter(function (product) {
    return product._id === id;
  })[0];
  const onChangeHandler = (e) => {
    setCurrentQty(e.target.value);
  };

  return (
    <Paper elevation={0} sx={{ borderRadius: 0 }}>
      <Container sx={{ marginTop: 1 }}>
        <GlobalStyles
          styles={{ 'div.app > div.MuiPaper-root': { height: '100%' } }}
        />
        {foundProduct !== undefined ? (
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexFlow: { xs: 'wrap', sm: 'row' },

              //image
              '& .img-container': {
                flex: { xs: '100%', md: '0 0 70%' },
                display: 'flex',
                backgroundColor: 'red',
                width: '100%',
                minHeight: '350px',
                maxHeight: '540px',
                alignItems: 'center',
                '& img': {
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                },
              },
              //   Opts
              '& .product-options': {
                flex: { xs: '100%', md: '1' },
              },
            }}
          >
            <div className='img-container'>
              <img
                src={foundProduct.thumbnail}
                // src={temp_product_img}
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

                {/* Qty */}
                <Grid
                  container
                  xs={12}
                  marginBottom={true}
                  alignItems={'stretch'}
                >
                  <Grid item xs={12}>
                    <Typography
                      component='p'
                      variant='body1'
                      marginBottom={true}
                    >
                      Quantity
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'stretch',
                        maxWidth: '200px',
                        '& > div:not(:nth-child(2))': {
                          flex: 'auto',
                        },
                        '& button, input': {
                          width: '100%',
                          fontSize: '1.2rem',
                          maxHeight: '35px',
                        },
                        '& input': {
                          height: '100%',
                          // fontSize: '1.1rem',
                          width: '50px',
                          textAlign: 'center',
                          border: '1px solid',
                          outline: 'none',
                          boxSizing: 'border-box',
                        },
                      }}
                    >
                      <div class='decrease-btn'>
                        <Button
                          variant='contained'
                          color='primary'
                          sx={{ borderRadius: '4px 0px 0px 4px' }}
                        >
                          -
                        </Button>
                      </div>
                      <div class='qty-input'>
                        <input
                          min='0'
                          max='9999'
                          maxLength='4'
                          inputMode='numeric'
                          pattern='[0-9]*'
                          value={currentQty}
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div class='increase-btn'>
                        <Button
                          variant='contained'
                          color='primary'
                          sx={{ borderRadius: '0px 4px 4px 0px' }}
                        >
                          +
                        </Button>
                      </div>
                    </Box>
                  </Grid>

                  {/* //Product login on variants */}
                </Grid>
                {/* Add to Cart Btn */}
                <Grid
                  container
                  xs={12}
                  marginBottom={true}
                  sx={{ marginTop: 1 }}
                >
                  <Grid item xs={12}>
                    <Button
                      variant='contained'
                      color='secondary'
                      fullWidth={true}
                    >
                      ADD TO CART
                    </Button>
                  </Grid>
                </Grid>

                {/* Product Desc */}
                <Grid container xs={12} marginBottom={true}>
                  <Grid item xs={12}>
                    <Typography variant='body1' gutterBottom>
                      {foundProduct.desc}
                    </Typography>
                  </Grid>
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

        {foundProduct && (
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              marginTop: 3,
              marginBottom: 2,
              paddingBottom: 1,
              justifyContent: 'center',
              flexFlow: { xs: 'wrap', md: 'wrap' },
              gap: { xs: 1, md: 2 },
              '& .MuiCard-root': {
                flex: {
                  xs: '90%',
                  sm: '80%',
                  md: '33.3%',
                },
              },
            }}
          >
            <Typography variant='h3' textAlign={'center'} sx={{ flex: '100%' }}>
              Related Products
            </Typography>
            <ThreeCardsSegment />
          </Box>
        )}
      </Container>
    </Paper>
  );
}
