import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import axios from 'axios';
import { BACKEND_URL } from '../../common/constant';
import { useAppSelector } from '../../redux/hooks';

export default function ReorderTracksPanel(props: {
  playlistId: string;
  playlistName: string;
  handleHideExpandedSongs: () => void;
  handleShowExpandedSongs: () => void;
}): JSX.Element {
  const { playlistId, playlistName, handleHideExpandedSongs, handleShowExpandedSongs } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const userStateJwt = useAppSelector((state) => state.user.jwt);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReorderTracks = () => {
    handleHideExpandedSongs();

    // todo: add Authorization header in axios request interceptor
    // todo: extract to a file that will handle fe -> api calls
    setIsLoading(true);
    axios
      .put(
        `${BACKEND_URL}/api/spotify/playlist/${playlistId}`,
        {},
        { headers: { Authorization: `Bearer ${userStateJwt}`, 'Content-Type': 'application/json' } },
      )
      .then(() => {
        setIsLoading(false);
        handleClose();
        handleShowExpandedSongs();
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Button variant="text" color="primary" onClick={handleClickOpen}>
        Randomize tracks
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Do you want to reorder tracks in {playlistName} playlist?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            SpotifyRandomizer will reorder tracks in your playlist. It will not affect &apos;date added&apos; property of any
            song. Unfortunately this process can only be done one song at a time so it might take a few minutes.
          </DialogContentText>
          <DialogContentText id="alert-dialog-description-2">{isLoading && <span>Reordering...</span>}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleReorderTracks} color="primary" autoFocus>
            Reorder
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
