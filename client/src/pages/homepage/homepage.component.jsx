import { useContext, useEffect } from 'react';
import axios from 'axios';

import HeroBanner from '../../components/hero-banner/hero-banner.component';
import SegmentTitle from './../../components/segment-title/segment-title.component';
import SegmentModule from './../../components/segment-module/segment-module.component';
import Footer from './../../components/footer/footer.component';
import HomepageProductSegment from './../../components/homepage-product-segment//homepage-product-segment.component';

// context/reducers/dispatch
import { updateCollections } from '../../reducer/productReducer';
import { AuthDispatchContext } from '../../contexts/auth.context';
import { ProductDispatchContext } from '../../contexts/product.context';

// Material Ui
import { Container, Grid, Paper } from '@material-ui/core';
// Styles
import useStyles from './homepage.styles';
export default function HomePage() {
  const classes = useStyles();
  const dispatch = useContext(AuthDispatchContext);
  const productDispatch = useContext(ProductDispatchContext);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await axios.get('/v1/products');
        productDispatch(updateCollections(res.data.products));
      } catch (err) {
        console.log('getProductsError', err);
      }
    }
    getProducts();
    return () => {
      //cleanup
    };
  }, []);

  return (
    <Container>
      <HeroBanner />
      <SegmentTitle />
      <SegmentModule />
      <HomepageProductSegment />
      <Footer />
    </Container>
  );
}
