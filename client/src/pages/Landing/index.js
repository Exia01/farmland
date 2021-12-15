import { Container } from '@mui/material';
import LandingPageBanner from '../../components/LandingPageBanner';
import LandingPageSegment from '../../components/LandingPageSegment';
import CreditFootNote from '../../components/CreditFootNote';

export default function Landing() {
  return (
    <Container>
      <LandingPageBanner />
      <LandingPageSegment />
      <CreditFootNote />
    </Container>
  );
}
