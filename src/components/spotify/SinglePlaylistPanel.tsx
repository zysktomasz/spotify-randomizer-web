import React from 'react';
import { Box, Image, Text, Link, Button, ButtonGroup, Badge } from '@chakra-ui/react';

interface SinglePlaylistPanelProps {
  playlist: Playlist;
}

function SinglePlaylistPanel(props: SinglePlaylistPanelProps): JSX.Element {
  const { playlist } = props;
  return (
    <Box p={4} display={{ md: 'flex' }} shadow="md" borderWidth="1px">
      <Box flexShrink={0}>
        <Image src={playlist.coverImageUrl} borderRadius="lg" boxSize="120px" />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Badge
          variant="outline"
          fontWeight="normal"
          textTransform="lowercase"
          fontSize="0.7em"
          letterSpacing="wide"
          color="teal.600"
        >
          {playlist.isPublic ? 'public' : 'private'}
        </Badge>
        <Link mt={1} display="block" fontSize="lg" lineHeight="normal" fontWeight="semibold" href="#">
          {playlist.name}
        </Link>
        <Text mt={2} color="gray.500">
          Songs: {playlist.tracksCount}
        </Text>
        <ButtonGroup marginTop={4} variant="outline" spacing="6">
          <Button colorScheme="blue" onClick={() => alert('TODO: Randomize button behaviour')}>
            Randomize
          </Button>
          <Button onClick={() => alert("TODO: 'Show Songs list' button behaviour")}>Show songs list</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default SinglePlaylistPanel;
