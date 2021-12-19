import { useContext, useEffect } from 'react';
import axios from 'axios';

//Components
import LandingPageBanner from '../../components/LandingPageBanner';
import LandingPageSegment from '../../components/LandingPageSegment';
import CreditFootNote from '../../components/CreditFootNote';

// MUI
import { Container } from '@mui/material';

//Context/Reducer/Dispatch
import { ProductDispatchContext } from '../../context/Product';
import { updateCollections } from '../../reducer/Product';
export default function Landing() {
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
  }, [productDispatch]);
  return (
    <Container>
      <LandingPageBanner />
      <LandingPageSegment />
      <CreditFootNote />
    </Container>
  );
}
