import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Card, CardContent, CardMedia, Collapse, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import TracksPanel from '../track/TracksPanel';
import ReorderTracksPanel from '../track/ReorderTracksPanel';

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    display: 'flex',
    textAlign: 'left',
    flexDirection: 'column',
    padding: theme.spacing(1.5, 2, 1),
    marginBottom: theme.spacing(2),
  },
  cardFlexRow: {
    display: 'flex',
    alignItems: 'center',
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
  const classes = useStyles();
  const { playlistItem } = props;

  const [songsExpanded, setSongsExpanded] = useState(false);

  const handleExpandClick = () => {
    setSongsExpanded(!songsExpanded);
  };

  const handleHideExpandedSongs = () => {
    if (songsExpanded) {
      setSongsExpanded(false);
    }
  };

  const handleShowExpandedSongs = () => {
    setSongsExpanded(true);
  };

  const showSongsButtonText = !songsExpanded ? 'Show songs' : 'Hide songs';

  return (
    <Card key={playlistItem.id} className={classes.cardRoot} variant="outlined">
      <Box className={classes.cardFlexRow}>
        <CardMedia className={classes.albumCover} image={playlistItem.coverImageUrl} title="album cover image" />
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {playlistItem.name}
          </Typography>
          <Typography variant="subtitle1">Songs: {playlistItem.tracksCount}</Typography>
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button onClick={handleExpandClick}>{showSongsButtonText}</Button>
            <Button component={Link} to={{ pathname: playlistItem.webPlayerUrl }} target="_blank">
              Go to Spotify Player
            </Button>
            <ReorderTracksPanel
              playlistId={playlistItem.id}
              playlistName={playlistItem.name}
              handleHideExpandedSongs={handleHideExpandedSongs}
              handleShowExpandedSongs={handleShowExpandedSongs}
            />
          </ButtonGroup>
        </CardContent>
      </Box>
      <Collapse in={songsExpanded} timeout="auto" unmountOnExit>
        <TracksPanel playlistId={playlistItem.id} />
      </Collapse>
    </Card>
  );
}
