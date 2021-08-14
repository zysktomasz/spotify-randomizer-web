import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import howToElementsData from './howToElements';
import HowToElementCard, { HowToElement } from './HowToElementCard';

const useStyles = makeStyles((theme) => ({
  mainPanel: {
    padding: theme.spacing(8, 0, 6),
  },
}));

function Homepage(): JSX.Element {
  const classes = useStyles();

  const elements = howToElementsData.map((element: HowToElement) => {
    return <HowToElementCard element={element} />;
  });

  return (
    <Container maxWidth="lg" component="main" className={classes.mainPanel}>
      <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
        How Spotify Randomizer works
      </Typography>
      {elements}
    </Container>
  );
}

export default Homepage;
