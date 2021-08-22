const howToElementsData: HowToElement[] = [
  {
    id: 1,
    heading: 'You login to SpotifyRandomizer through your Spotify account',
    content: `You will be asked to allow SpotifyRandomizer certain permissions on your account.
      These are for: reading your profile data, reading your playlists (public and private), modifying your playlists (in order to reorder songs).`,
  },
  {
    id: 2,
    heading: 'SpotifyRandomizer shows list of your playlists and tracks',
    content: 'Both public and private. Along with playlist image, added songs count and list of Tracks in each playlist.',
  },
  {
    id: 3,
    heading: 'You choose one of your playlists and click "Randomize"',
    content: 'Popup box will appear asking you to confirm your decision.',
  },
  {
    id: 4,
    heading: 'SpotifyRandomizer reorganizes songs in your playlist in random order',
    content:
      "Songs will be rearranged in random order. Their 'added date' will not change - so you will also be able to sort them in order you added them originally.",
  },
];

export default howToElementsData;
