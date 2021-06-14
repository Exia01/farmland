import { TextField } from "@material-ui/core";

export default function FormInput() {
  return (
    <TextField
      variant='outlined'
      margin='normal'
      required
      fullWidth
      id='email'
      label='email'
      name='email'
      autoComplete='email'
      type='email'
      autoFocus
    />
  );
}
