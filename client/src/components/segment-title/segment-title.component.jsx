import { Typography } from '@material-ui/core';
//Styles
import useStyles from './segment-title.styles';

function SegmentTitle() {
  const classes = useStyles();
  return (
    <article className={classes.root}>
      <Typography variant='h2' gutterBottom component='h2'>
        The best nature can offer!
      </Typography>
      <p></p>
      <Typography variant='body1' gutterBottom>
        Established in 1958, our goal has and mission has been to farm in a way
        that would preserve the earth and her inhabitants. Since then, our farm
        has grown and our goals and impact will continue to with it. We also
        raise all of our animals with the best possible care.
      </Typography>
    </article>
  );
}

export default SegmentTitle;
