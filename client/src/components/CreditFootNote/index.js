import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export default function CreditFootNote() {
  return (
    <Box
      sx={{
        marginTop: 2,
        display: 'flex',
        flexFlow: { xs: 'wrap' },
        justifyContent: 'center',
        gap: '.5rem 2rem',
        textAlign: 'center',
        '& .credit-link': {
          flex: { xs: '80%', md: '0 0 auto' },
        },
      }}
    >
      <CreditsTitleContainerStyledDiv>
        <Typography variant='body1'>
          Credits to the following artists for the following icons:
        </Typography>
      </CreditsTitleContainerStyledDiv>
      {/*  */}
      <LinkTagContainerStyledDiv className='credit-link'>
        <Typography variant='caption' display='block' gutterBottom>
          <a
            href='https://icons8.com/icon/12131/family'
            target='_blank'
            rel='noopener noreferrer'
          >
            Family icon by Icons8
          </a>
        </Typography>
      </LinkTagContainerStyledDiv>
      <LinkTagContainerStyledDiv className='credit-link'>
        <Typography variant='caption' display='block' gutterBottom>
          <a
            href='https://icons8.com/icon/20873/organic-food'
            target='_blank'
            rel='noopener noreferrer'
          >
            Organic Food icon by Icons8
          </a>
        </Typography>
      </LinkTagContainerStyledDiv>
      <LinkTagContainerStyledDiv className='credit-link'>
        <Typography variant='caption' display='block' gutterBottom>
          <a
            href='https://icons8.com/icon/12131/family'
            target='_blank'
            rel='noopener noreferrer'
          >
            Family icon by Icons8
          </a>
        </Typography>
      </LinkTagContainerStyledDiv>
    </Box>
  );
}

const CreditsTitleContainerStyledDiv = styled('div')({
  flex: '0 0 100%',
});
const LinkTagContainerStyledDiv = styled('div')({});
