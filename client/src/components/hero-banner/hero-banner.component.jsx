import React from 'react';

// css
import classes from './hero-banner.module.css';

// jss
// import useStyles from './hero-banner.styles';

export default function HeroBanner() {
  // const classes = useStyles
  return (
    <div className={classes.root}>
      <div className={classes.backgroundImage}></div>
      <div className={classes.titleContainer}>
        <p classes={classes.heroImage}>
          <img src='' alt='' srcset='' />
        </p>
        <p classes={classes.title}>FARMLAND</p>
        <p classes={classes.btnTitle}>
          Shop now <span>Icon</span>
        </p>
      </div>
    </div>
  );
}
