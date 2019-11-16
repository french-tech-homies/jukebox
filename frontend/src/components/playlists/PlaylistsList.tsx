import React, { FC } from 'react';
import { Playlist } from './types';
import { PlaylistItem } from './PlaylistItem';
import { Box } from '@material-ui/core';

interface PlaylistsListProps {
  playlists: Playlist[];
  onPlaylistSelected?: (playlist: Playlist) => void;
}

export const PlaylistsList: FC<PlaylistsListProps> = ({ playlists, onPlaylistSelected }) => {
  return (
    <>
      {playlists.map((playlist, idx) => {
        return (
          <Box
            key={idx}
            mt={2}
            mb={2}
            onClick={() => {
              if (onPlaylistSelected) onPlaylistSelected(playlist);
            }}
          >
            <PlaylistItem playlist={playlist} />
          </Box>
        );
      })}
    </>
  );
};
