import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../contexts/product.context';

// Material UI
import {
  Container,
  Grid,
  Paper,
  makeStyles,
  Typography,
} from '@material-ui/core';

// Component
import ProductCard from '../../components/product-card/product-card.component';

import { Pagination } from '@material-ui/lab';
import productService from './../../services/product-service';

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
  paginationDiv: {
    margin: '16px 0',
  },
});

const Products = () => {
  const classes = useStyles();
  // const { products } = useContext(ProductContext);
  const [limit, setLimit] = useState(4);
  const [skip, setSkip] = useState(0);

  const [currentProducts, setCurrentProducts] = useState([]);
  const [totalDocuments, setTotalDocuments] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChangeHandler = (e, value) => {
    setCurrentPage(value);
    // Pemdas
    setSkip((value - 1) * limit);
  };
  var totalPages = Math.ceil(totalDocuments / limit);
  console.log(`totalPages ${totalPages}`);
  const fetchProducts = async () => {
    // console.log(`Skip: ${skip}, Limit:${limit}`);
    let params = { skip, limit, name: 'N-A' };
    try {
      let res = await productService.getAllProducts(params);
      setTotalDocuments(res.data.total);
      setCurrentProducts(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
    return () => {
      // cleanup
    };
  }, [limit, skip, currentPage]);
  return (
    <Container>
      <Grid container spacing={3} alignItems='stretch' justifyContent='center'>
        {currentProducts.length > 0 ? (
          currentProducts.map((individualProduct) => (
            <Grid item xs={12} sm={6} md={4} key={individualProduct._id}>
              <ProductCard
                image={individualProduct.thumbnail}
                title={individualProduct.name}
                description={individualProduct.description}
                productLink={individualProduct._id}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={10} md container justifyContent='center'>
            {/* if not product found */}
            <Typography variant='h2' gutterBottom component='h2'>
              No Products Available
            </Typography>
          </Grid>
        )}

        {currentProducts.length > 0 ? (
          <Grid
            item
            xs={10}
            md={12}
            container
            justifyContent='center'
            className={classes.paginationDiv}
          >
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={onPageChangeHandler}
            />{' '}
          </Grid>
        ) : null}
      </Grid>
    </Container>
  );
};

export default Products;
