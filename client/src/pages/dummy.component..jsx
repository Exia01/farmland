import { Button, Container, Grid, Paper } from '@material-ui/core';
import { useContext } from 'react';
import { FetchContext } from '../contexts/fetch.context';

export default function DummyPage() {
  const authAxios = useContext(FetchContext);

  const onClickHandler = (e) => {
    authAxios
      .get('products')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={{ marginTop: '3rem' }}>
            {' '}
            <Button
              variant='contained'
              color='primary'
              onClick={onClickHandler}
            >
              Test
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
