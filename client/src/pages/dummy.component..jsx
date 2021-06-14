import { Button, Container, Grid, Paper } from '@material-ui/core';

export default function DummyPage() {


  const onClickHandler = (e) => {
  };
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            {' '}
            <Button variant='contained' color='primary'>
              Primary
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
