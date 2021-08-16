import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Card, CardContent, CardMedia, Collapse, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import TracksPanel from '../track/TracksPanel';

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

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const showSongsButton = <Button onClick={handleExpandClick}>{!expanded ? 'Show songs' : 'Hide songs'}</Button>;

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
            {showSongsButton}
            <Button component={Link} to={{ pathname: playlistItem.webPlayerUrl }} target="_blank">
              Go to Spotify Player
            </Button>
            <Button disabled>Randomize</Button> {/* TODO: implement button */}
          </ButtonGroup>
        </CardContent>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TracksPanel playlistId={playlistItem.id} />
      </Collapse>
    </Card>
  );
}
