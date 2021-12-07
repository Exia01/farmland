import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export default function LandingPageSegment() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background.paper',
      }}
    >
      <StyledSegmentHeaderDiv>
        <Typography variant='h2' gutterBottom component='h2'>
          The best nature can offer!
        </Typography>
        <Typography variant='body1' gutterBottom>
          Established in 1958, our goal has and mission has been to farm in a
          way that would preserve the earth and her inhabitants. Since then, our
          farm has grown and our goals and impact will continue to with it. We
          also raise all of our animals with the best possible care.
        </Typography>
      </StyledSegmentHeaderDiv>
      <Box>
          
      </Box>
      
    </Box>
  );
}

const StyledSegmentHeaderDiv = styled('div')(({ theme }) => ({
  flex: '0 0 80%',
  padding: '2rem',
  textAlign: 'center',
  position: 'relative',
  marginTop: -30,
  backgroundColor: theme.palette.background.paper,
  //   color: theme.palette.text,
  //   zIndex: 1,
  // color: theme.palette.primary.contrastText,
  // backgroundColor: theme.palette.primary.main,
  // padding: theme.spacing(1),
  // borderRadius: theme.shape.borderRadius,
}));
