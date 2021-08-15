import React from 'react';
import { Link, Typography } from '@material-ui/core';
import SocialMediaLinks from './SocialMediaLinks';

export default function Footer(): JSX.Element {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="http://zysk.it/">
          Tomasz Zysk
        </Link>{' '}
        {new Date().getFullYear()}
        <SocialMediaLinks />
      </Typography>
    </footer>
  );
}
