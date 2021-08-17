import React, { useEffect, useState } from 'react';
import { Grid, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Track from './Track';
import { useAppSelector } from '../../redux/hooks';
import { BACKEND_URL } from '../../common/constant';

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TracksPanel(props: { playlistId: string }): JSX.Element {
  const classes = useStyles();
  const { playlistId } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([]);
  const userStateJwt = useAppSelector((state) => state.user.jwt);

  useEffect(() => {
    // todo: add Authorization header in axios request interceptor
    // todo: extract to a file that will handle fe -> api calls
    setIsLoading(true);
    axios
      .get(`${BACKEND_URL}/api/spotify/playlist/${playlistId}/tracks`, { headers: { Authorization: `Bearer ${userStateJwt}` } })
      .then((response) => {
        const { data } = response;
        setTracks(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [playlistId, setTracks, userStateJwt]); // why tho

  return (
    <>
      <h2>Tracks for playlist id: {playlistId}</h2>
      {isLoading && <h2>Loading tracks...</h2>}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            <List dense>
              {tracks.map((track) => (
                <Track key={track.trackItem.id} track={track} />
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
