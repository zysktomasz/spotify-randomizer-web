import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import tempPlaylistsArray from './tempPlaylistsArray';
import PlaylistCard from './PlaylistCard';

const useStyles = makeStyles((theme) => ({
  mainPanel: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Playlists(): JSX.Element {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" component="main" className={classes.mainPanel}>
      <h1>Playlists</h1>
      <p>test</p>
      {tempPlaylistsArray.map((playlist) => (
        <PlaylistCard key={playlist.id} playlistItem={playlist} />
      ))}
    </Container>
  );
}
