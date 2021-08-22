import React from 'react';
import { IconButton } from '@material-ui/core';
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/all';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  iconButtonLink: {
    fontSize: '20px',
  },
}));

function SocialMediaLinks(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <IconButton target="_blank" href="https://www.linkedin.com/in/tomasz-zysk/">
        <FaLinkedin className={classes.iconButtonLink} />
      </IconButton>
      <IconButton target="_blank" href="https://github.com/zysktomasz">
        <FaGithub className={classes.iconButtonLink} />
      </IconButton>
      <IconButton target="_blank" href="https://zysk.it">
        <FaGlobe className={classes.iconButtonLink} />
      </IconButton>
    </>
  );
}

export default SocialMediaLinks;
