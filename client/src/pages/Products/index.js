import { useState, useEffect } from 'react';
import productService from './../../services/Product/index';
import ProductCard from './../../components/ProductCard/index';

//MUI
import { Box, Container, Pagination, Typography } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';

export default function Products() {
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(0);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [totalDocuments, setTotalDocuments] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  var totalPages = Math.ceil(totalDocuments / limit);

  useEffect(() => {
    async function fetchProducts() {
      // console.log(`Skip: ${skip}, Limit:${limit}`);
      let params = { skip, limit, name: 'N-A' };
      try {
        let res = await productService.getAllProducts(params);
        setTotalDocuments(res.data.total);
        setCurrentProducts(res.data.products);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts();
    return () => {
      // cleanup
    };
  }, [limit, skip, currentPage]);
  const onPageChangeHandler = (e, value) => {
    setCurrentPage(value);
    // Pemdas
    setSkip((value - 1) * limit);
  };
  return (
    <Container>
      <GlobalStyles
        styles={{ 'div.app > div.MuiPaper-root': { height: '100%' } }}
      />
      <Box
        sx={{
          flex: '100%',
          display: 'flex',
          width: '100%',
          flexFlow: { xs: 'wrap', md: 'wrap' },
          justifyContent: 'center',
          alignItems: 'stretch',
          textAlign: 'left',
          marginTop: 2,
          gap: { xs: 1, md: 2, lg: 4 },
          '& .MuiCard-root': {
            flex: {
              xs: '0 0 100%',
              // sm: '80%',
              md: '33.3%',
            },
          },
          '& .app > .MuiPaper-root': {
            backgroundColor: 'red',
          },
        }}
      >
        {currentProducts.length > 0 ? (
          currentProducts.map((individualProduct) => (
            <ProductCard
              key={individualProduct._id}
              thumbnail={individualProduct.thumbnail}
              title={individualProduct.name}
              desc={individualProduct.desc}
              productLink={individualProduct._id}
              price={individualProduct.price}
            />
          ))
        ) : (
          <Typography variant='h3' gutterBottom component='h3'>
            No Products Available
          </Typography>
        )}
      </Box>
      {currentProducts.length > 0 && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flex: { xs: '0 0 80%', md: '100%' },
            marginTop: 3,
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={onPageChangeHandler}
          />{' '}
        </Box>
      )}
    </Container>
  );
}
