import axios from 'axios';
import { useState } from 'react';
import ThemeToggle from './../../components/theme-toggle/theme-toggle.component';
//Material UI
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

// Styles
import useStyles from './create-product.styles';

export default function CreateProduct() {
  const classes = useStyles();

  const [productForm, setProductForm] = useState({
    name: 'Test Product',
    description: 'Lorem Ipsum',
    department: 'Fresh Fruit',
    thumbnail: 'https://placeholder.com/250',
    listed: false,
    productVariants: 'lb',
  });

  const [productFormErrors, setProductFormErrors] = useState({
    name: '',
    description: '',
    listed: '',
  });

  const [productApiError, setProductApiError] = useState('');

  function checkboxHandler(e) {
    setProductForm({
      ...productForm,
      [e.target.name]: !productForm[e.target.name],
    });
  }

  function onChangeHandler(e) {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    const { name, description } = productForm;
    let formIsValid = true;

    setProductApiError('');
    setProductApiError(null);

    const formErrors = {
      name: '',
      description: '',
    };

    if (!name) {
      formErrors.name = 'Name is required';
      formIsValid = false;
    }

    if (!description) {
      formErrors.description = 'Description is required';
      formIsValid = false;
    }

    if (!formIsValid) {
      setProductFormErrors(formErrors);
      console.log('not valid');
      return;
    }

    try {
      console.log('hit here');
      //could implement a loading
      const { data } = await axios.post('/v1/products', productForm);

      //dispatch to add the product to the context

      setProductForm({
        name: '',
        description: '',
        department: '',
        thumbnail: 'https://placeholder.com/250',
        listed: false,
        productVariants: 'lb',
      });
    } catch (err) {
      // console.log('Error', err.response);
      console.log('Error', err);
      setProductApiError(err.response.data.msg);
      //reset successful login message
    }
  }

  //Form unpacking
  const { name, description, department, thumbnail, listed, productVariants } =
    productForm;
  return (
    <Container maxWidth={'sm'} className={classes.topSpacer}>
      <Card className={classes.root}>
        <Grid container className={classes.root}>
          {/* <Grid item xs> */}
          <Typography variant='h4' component='h4' gutterBottom={false}>
            Create a new product
          </Typography>
          {/* </Grid> */}
          {/* <Grid item>
            <ThemeToggle />
          </Grid> */}
        </Grid>

        <CardContent>
          <div className={classes.formHeader}>
            {productApiError && (
              <Typography
                variant='body1'
                component='p'
                className={classes.apiError}
              >
                {productApiError}
              </Typography>
            )}
          </div>
          <div className={classes.formContainer}>
            <form
              className={classes.form}
              noValidate
              onSubmit={onSubmitHandler}
            >
              <TextField
                required
                variant='outlined'
                margin='normal'
                fullWidth
                id='productName'
                label='Name'
                name='name'
                autoComplete='name'
                autoFocus
                value={name}
                onChange={onChangeHandler}
                helperText={productFormErrors.name}
                error={productFormErrors.name !== ''}
              />

              <TextField
                required
                id='descriptionField'
                label='Description'
                placeholder='Placeholder'
                multiline
                margin='normal'
                rows={4}
                fullWidth
                name='description'
                value={description}
                onChange={onChangeHandler}
                variant='outlined'
              />

              <TextField
                variant='outlined'
                margin='normal'
                // required
                fullWidth
                id='department'
                label='Department'
                name='department'
                value={department}
                onChange={onChangeHandler}
                // helperText={productFormErrors.department}
                // error={productFormErrors.department !== ''}
              />
              <TextField
                variant='outlined'
                margin='normal'
                // required
                fullWidth
                id='thumbnail'
                label='Thumbnail'
                name='thumbnail'
                value={thumbnail}
                onChange={onChangeHandler}
                // helperText={productFormErrors.department}
                // error={productFormErrors.department !== ''}
              />
              <FormControl fullWidth margin='normal'>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={listed}
                      onChange={checkboxHandler}
                      name='listed'
                      color='primary'
                    />
                  }
                  label='Listed'
                />
              </FormControl>

              <FormControl
                variant='outlined'
                className={classes.formControl}
                // className={`${classes.formControl} ${classes.spacing}`}
                margin='normal'
              >
                <InputLabel id='productVariantLabel'>
                  Product Variant
                </InputLabel>
                <Select
                  labelId='productVariantSelect'
                  id='demo-simple-select-outlined'
                  value={productVariants}
                  onChange={onChangeHandler}
                  label='Product Variant'
                  name='productVariants'
                >
                  <MenuItem value='28934'>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'lb'}>lb</MenuItem>
                  <MenuItem value={'oz'}>oz</MenuItem>
                  <MenuItem value={'carton'}>carton</MenuItem>
                </Select>
              </FormControl>

              <div className={classes.formBtn}>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  size='large'
                >
                  Create Product
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
