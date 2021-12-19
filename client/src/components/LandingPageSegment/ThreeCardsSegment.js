import { useContext } from 'react';

import { ProductContext } from '../../context/Product';
import { getRandomProducts } from './../../utils/productPicker/index';
import ProductCard from './../ProductCard/index';

import { Typography } from '@mui/material';

export default function ThreeCardsSegment() {
  const { products } = useContext(ProductContext);
  const randomlyPickedProductsArr = getRandomProducts(products, 3);
  return (
    <>
      {randomlyPickedProductsArr.length > 0 ? (
        randomlyPickedProductsArr.map((product) => (
          <ProductCard
            key={product._id}
            thumbnail={product.thumbnail}
            title={product.name}
            desc={product.desc}
            productLink={product._id}
            price={product.price}
          />
        ))
      ) : (
        <Typography component='body2' variant='h5'>
          No Products Available
        </Typography>
      )}
    </>
  );
}
