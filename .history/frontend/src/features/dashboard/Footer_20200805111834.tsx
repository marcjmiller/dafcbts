import React from 'react';
import { baseStyles } from '../../resources/theme';
import { Link, Typography } from '@material-ui/core';

const Footer = () => {
  const classes = baseStyles();

  return (
    <div className={classes.footer}>
      <Typography >
        DumbAFCBTs by Marc. <br/>
        Support the site by clicking
        <Link href={'https://dumbafcbts.app/support'} target={'_blank'} rel={'noreferrer'}> here </Link>.<br>
        Visit
        <Link href={'https://www.reddit.com/r/dumbafcbts'} target={'_blank'} rel={'noreferrer'}> /r/DumbAFCBTs </Link>
        on Reddit.
      </Typography>
    </div>
  );
};

export default Footer;