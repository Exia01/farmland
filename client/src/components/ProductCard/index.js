import { Link as RouterLink } from 'react-router-dom';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Link,
} from '@mui/material';

export default function ProductCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ minHeight: 250, objectFit: 'contain' }}
        component='img'
        height='140'
        image={props.thumbnail}
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {props.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {/* {props.desc} */}
          From ${props.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>
          {' '}
          <Link
            component={RouterLink}
            to={`/products/${props.productLink}`}
            underline='none'
          >
            View Product
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
