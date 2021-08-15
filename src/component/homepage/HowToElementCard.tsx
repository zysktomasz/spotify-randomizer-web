import React from 'react';
import { Avatar, Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export interface HowToElement {
  id: number;
  heading: string;
  content?: string;
}

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    textAlign: 'left',
    marginBottom: theme.spacing(2),
  },
  avatar: {
    backgroundColor: 'green',
  },
}));

function HowToElementCard(props: { element: HowToElement }): JSX.Element {
  const {
    element: { id, heading, content },
  } = props;
  const classes = useStyles();

  return (
    <Card key={id} className={classes.cardRoot}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {id}
          </Avatar>
        }
        title={heading}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HowToElementCard;
