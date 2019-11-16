import React, { FC, useState } from 'react';
import { SuggestionsList } from '../components/suggestions/SuggestionsList';
import { Suggestion } from '../components/suggestions/types';
import { Typography, Box } from '@material-ui/core';
import { Layout } from '../ui/Layout';
import { PlaylistsList } from '../components/playlists/PlaylistsList';
import { Playlist } from '../components/playlists/types';

export const Home: FC = () => {
  const [suggestions] = useState<Suggestion[]>([
    { artist: { name: 'Damso', song: 'Autotune' }, submitter: { name: 'Ali' } },
    { artist: { name: 'Dennis Loyd', song: 'Think about it' }, submitter: { name: 'Yann' } },
    { artist: { name: 'Diamond Deuklo', song: 'Xavier' }, submitter: { name: 'Julien' } },
    { artist: { name: 'Galant, 6LACK', song: 'Sweet Insomnia (feat. 6LACK)' }, submitter: { name: 'Alex Petit Poney' } },
    { artist: { name: 'Koba LaD', song: 'Train de vie' }, submitter: { name: 'Sami' } },
    { artist: { name: 'Booka Shade', song: 'Body Language - Interpretation' }, submitter: { name: 'Mathieu' } }
  ]);

  const [playlists] = useState<Playlist[]>([
    { name: '🇫🇷 💸 Rap Français', countOfSongs: 454, thumbnail: 'https://source.unsplash.com/random/140' },
    {
      name: '😌♨️ Chill, Electro, Indietronic, HipHop, ChillHop, TripHop',
      countOfSongs: 604,
      thumbnail: 'https://source.unsplash.com/random/140'
    },
    { name: "🔥💵 Hip Hop, Rap, Heavy 808's - New School", countOfSongs: 319, thumbnail: 'https://source.unsplash.com/random/140' },
    { name: '💎🇫🇷 French Youth Electro', countOfSongs: 187, thumbnail: 'https://source.unsplash.com/random/140' }
  ]);
  const [playlistSelected, setPlaylistSelected] = useState<Playlist>();

  return (
    <Layout>
      <Box display="flex" flex={1}>
        <Box display="flex" flexDirection="column" alignItems="center" border={4} borderRadius="borderRadius" p={4} mr={4}>
          <Typography component="h2" variant="h6">
            Playlists
          </Typography>
          <PlaylistsList
            playlists={playlists}
            onPlaylistSelected={playlist => {
              setPlaylistSelected(playlist);
            }}
          />
        </Box>
        <Box flex={1} border={4} borderRadius="borderRadius" p={4}>
          <SuggestionsList
            suggestions={suggestions}
            playlist={playlistSelected}
            onSuggestionsAdded={(playlist, suggestions) => {
              console.log('Should had', suggestions, ' to', playlist);
            }}
          />
        </Box>
      </Box>
    </Layout>
  );
};
