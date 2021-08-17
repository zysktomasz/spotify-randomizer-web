import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

export default function Track(props: { track: Track }): JSX.Element {
  const { track } = props;

  const primary = (item: Track) => {
    const artists = item.trackItem.artists.map((artist: Artist) => artist.name).join(', ');

    return `${item.trackItem.name} - ${artists}`;
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={track.trackItem.albumImageUrl} />
      </ListItemAvatar>
      <ListItemText primary={primary(track)} secondary={track.trackItem.albumName} />
    </ListItem>
  );
}
