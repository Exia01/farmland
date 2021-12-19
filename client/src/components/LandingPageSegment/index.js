import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Components
import ProductCard from './../ProductCard/index';
import ThreeCardsSegment from './ThreeCardsSegment';

export default function LandingPageSegment() {
  let navigate = useNavigate();

  function onClickHandler() {
    navigate('/products');
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background.paper',
        textAlign: 'center',
        '& .title-segment': {
          width: { xs: '70%', sm: '80%' },
          padding: '2rem',
          position: 'relative',
          marginTop: -4,
          backgroundColor: 'background.paper',
        },
      }}
    >
      {/* Title and blurb */}
      <StyledSegmentHeaderStyledDiv className='title-segment'>
        <Typography variant='h2' gutterBottom component='h2'>
          The best nature can offer!
        </Typography>
        <Typography variant='body1' gutterBottom>
          Established in 1958, our goal has and mission has been to farm in a
          way that would preserve the earth and her inhabitants. Since then, our
          farm has grown and our goals and impact will continue to with it. We
          also raise all of our animals with the best possible care.
        </Typography>
      </StyledSegmentHeaderStyledDiv>
      {/* Icons */}
      <Box
        sx={{
          flex: '100%',
          display: 'flex',
          gap: { xs: 1 },
          flexFlow: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 1,
          '& div:nth-of-type(2)': {
            // border: '0 0 1',
          },
        }}
      >
        {/* 1 */}
        <IconTitleStyledDiv>
          <IconImgStyledTag
            src='https://img.icons8.com/color/96/000000/family.png'
            alt='Family Owned Icon'
          />
          <Typography variant='h6'>Family owned</Typography>
        </IconTitleStyledDiv>
        {/* 2 */}
        <IconTitleStyledDiv>
          <IconImgStyledTag
            src='https://img.icons8.com/fluency/96/000000/-electricity-triangle-sign.png'
            alt='Renewable Energy Icon'
          />
          <Typography variant='h6'>100% Renewable Resources</Typography>
        </IconTitleStyledDiv>
        {/* 3 */}
        <IconTitleStyledDiv>
          <IconImgStyledTag
            src='https://img.icons8.com/color/96/000000/organic-food.png'
            alt='Organic Icon'
          />
          <Typography variant='h6'>100% Organic & Non-GMO</Typography>
        </IconTitleStyledDiv>
      </Box>
      <StyledDivider />
      {/* Product title and btn */}
      <Typography variant='h2' gutterBottom component='h2'>
        Our Delicious Products
      </Typography>
      <ButtonContainerStyledDiv>
        <Button variant='outlined' color='secondary' onClick={onClickHandler}>
          View All Products
        </Button>
      </ButtonContainerStyledDiv>
      <StyledDivider />
      {/* Products sample */}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexFlow: { xs: 'wrap', md: 'row' },
          justifyContent: 'center',
          alignItems: 'stretch',
          textAlign: 'left',
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
        <ThreeCardsSegment />
      </Box>
    </Box>
  );
}

const StyledSegmentHeaderStyledDiv = styled('div')(({ theme }) => ({
  // padding: '2rem',
  // textAlign: 'center',
  // position: 'relative',
  // marginTop: -30,
  // backgroundColor: theme.palette.background.paper,
  //   color: theme.palette.text,
  //   zIndex: 1,
  // color: theme.palette.primary.contrastText,
  // backgroundColor: theme.palette.primary.main,
  // padding: theme.spacing(1),
  // borderRadius: theme.shape.borderRadius,
}));

// '& .ChildSelector': {
//   bgcolor: 'primary.main',
// }
const IconTitleStyledDiv = styled('div')(({ theme }) => ({
  flex: '30%',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 2,
  gap: '1rem',
}));
const IconImgStyledTag = styled('img')({
  maxWidth: '150px',
});

const ProductTitleShowcaseStyledDiv = styled('div')(({ theme }) => ({}));

const StyledDivider = styled('hr')({
  width: '100%',
});

const ButtonContainerStyledDiv = styled('div')({
  flex: '100%',
  textAlign: 'center',
  marginBottom: '1rem',
});
