import { Container, Grid, Paper } from '@material-ui/core';
import HeroBanner from '../../components/hero-banner/hero-banner.component';
import SegmentTitle from './../../components/segment-title/segment-title.component';
import SegmentModule from './../../components/segment-module/segment-module.component';

// Styles
import useStyles from './homepage.styles';
import HomepageProductSegment from './../../components/homepage-product-segment//homepage-product-segment.component';
import Footer from './../../components/footer/footer.component';
export default function HomePage() {
  const classes = useStyles();

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
