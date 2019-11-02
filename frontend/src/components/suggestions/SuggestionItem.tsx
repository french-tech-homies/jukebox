import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import { Suggestion } from './types';

interface SuggestionItemProps {
  suggestion: Suggestion;
}

export const SuggestionItem: FC<SuggestionItemProps> = ({ suggestion }) => {
  const { artist, submitter } = suggestion;
  return (
    <Box display="flex" flex={1} boxShadow={4} p={4}>
      <Box display="flex" flexDirection="column" flex={1} alignItems="flex-start">
        <Typography>
          {artist.name} - {artist.song}
        </Typography>
        <Typography>Suggested by {submitter.name}</Typography>
      </Box>
      <Box>Preview here</Box>
    </Box>
  );
};
