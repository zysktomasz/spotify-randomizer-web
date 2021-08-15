import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import PlaylistCard from './PlaylistCard';
import { useAppSelector } from '../../redux/hooks';
import { BACKEND_URL } from '../../common/constant';

const useStyles = makeStyles((theme) => ({
  mainPanel: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function PlaylistsPanel(): JSX.Element {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const userStateJwt = useAppSelector((state) => state.user.jwt);

  useEffect(() => {
    console.log('PlaylistsPanel component useEffect()');

    // todo: add Authorization header in axios request interceptor
    // todo: extract to a file that will handle fe -> api calls
    setIsLoading(true);
    axios
      .get(`${BACKEND_URL}/api/spotify/playlist`, { headers: { Authorization: `Bearer ${userStateJwt}` } })
      .then((response) => {
        const { data } = response;
        setPlaylists(data);
        console.log('response', response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('error', error);
        setIsLoading(false);
      });
  }, [setPlaylists, userStateJwt]); // why tho

  return (
    <Container maxWidth="lg" component="main" className={classes.mainPanel}>
      <h1>Playlists</h1>
      {isLoading && <h2>Loading playlists...</h2>}
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} playlistItem={playlist} />
      ))}
    </Container>
  );
}
