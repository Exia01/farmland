import LandingPageBanner from '../../components/LandingPageBanner';
import LandingPageSegment from '../../components/LandingPageSegment';
import { Container } from '@mui/material';

export default function Landing() {
  return (
    <Container>
      <LandingPageBanner />
      <LandingPageSegment/>
    </Container>
  );
}
