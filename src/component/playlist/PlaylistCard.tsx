import React from 'react';
import { Button, ButtonGroup, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.5, 2, 1),
    marginBottom: theme.spacing(2),
  },
  albumCover: {
    width: 96,
    height: 96,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    textAlign: 'left',
  },
}));

export default function PlaylistCard(props: { playlistItem: Playlist }): JSX.Element {
  const { playlistItem } = props;
  const classes = useStyles();

  return (
    <Card key={playlistItem.id} className={classes.cardRoot} variant="outlined">
      <CardMedia className={classes.albumCover} image={playlistItem.coverImageUrl} title="album cover image" />
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {playlistItem.name}
        </Typography>
        <Typography variant="subtitle1">Songs: {playlistItem.tracksCount}</Typography>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          <Button disabled>Show songs</Button> {/* TODO: implement button */}
          <Button component={Link} to={{ pathname: playlistItem.webPlayerUrl }} target="_blank">
            Go to Spotify Player
          </Button>
          <Button disabled>Randomize</Button> {/* TODO: implement button */}
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
