import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppSelector } from '../../redux/hooks';
import { Heading, Progress, Stack } from '@chakra-ui/react';
import FluidContainer from '../common/FluidContainer';
import SinglePlaylistPanel from './SinglePlaylistPanel';
import { BACKEND_URL } from '../../common/constants';

function Playlists(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const userStateJwt = useAppSelector((state) => state.user.jwt);

  useEffect(() => {
    console.log('Playlists component useEffect()');

    // todo: add Authorization header in axios request interceptor
    setIsLoading(true);
    axios
      .get(`${BACKEND_URL}/api/spotify/playlists`, { headers: { Authorization: `Bearer ${userStateJwt}` } })
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
  }, [setPlaylists]); // why tho

  return (
    <FluidContainer>
      <Heading mb={4}>Playlists</Heading>
      {isLoading && <Progress size="xs" isIndeterminate />}
      <Stack spacing={2}>
        {playlists.map((playlist, index) => (
          <SinglePlaylistPanel key={index} playlist={playlist} />
        ))}
      </Stack>
    </FluidContainer>
  );
}

export default Playlists;
