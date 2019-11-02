import React, { FC, useState } from 'react';
import { Suggestion } from './types';
import { SuggestionItem } from './SuggestionItem';
import { Typography, Box, Checkbox, Button, makeStyles, createStyles, Theme } from '@material-ui/core';
import { Playlist } from '../playlists/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actions: {
      '& button': {
        marginLeft: theme.spacing(2)
      }
    }
  })
);

interface SuggestionsListProps {
  suggestions: Suggestion[];
  playlist?: Playlist;
  onSuggestionsAdded?: (playlist: Playlist, suggestions: Suggestion[]) => void;
}
export const SuggestionsList: FC<SuggestionsListProps> = ({ suggestions, playlist, onSuggestionsAdded }) => {
  const classes = useStyles();

  const initialState = suggestions.reduce(
    (acc, suggestion, idx) => {
      acc[idx] = { suggestion, selected: false };
      return acc;
    },
    {} as { [id: number]: { suggestion: Suggestion; selected: boolean } }
  );
  const [selectedItems, setSelectedItems] = useState(initialState);
  const getSelectedSuggestions = () =>
    Object.values(selectedItems)
      .filter(s => s.selected)
      .map(({ suggestion }) => suggestion);
  const countOfSelected = Object.values(selectedItems).filter(s => s.selected).length;
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box flex={1}>
          <Typography component="h2" variant="h6">
            Suggestions ({countOfSelected})
          </Typography>
        </Box>
        <Box className={classes.actions}>
          <Button
            onClick={() => {
              if (onSuggestionsAdded && playlist) onSuggestionsAdded(playlist, getSelectedSuggestions());
            }}
            variant="outlined"
            color="secondary"
            disabled={!playlist || countOfSelected === 0}
          >
            {playlist ? `Add to ${playlist.name}` : `Select a playlist`}
          </Button>
          <Button onClick={() => setSelectedItems(initialState)} variant="outlined" color="secondary" disabled={countOfSelected === 0}>
            Clear
          </Button>
        </Box>
      </Box>

      <Box>
        {suggestions.map((suggestion, idx) => {
          return (
            <Box
              onClick={() => setSelectedItems({ ...selectedItems, [idx]: { suggestion, selected: !selectedItems[idx].selected } })}
              display="flex"
              key={idx}
              mt={2}
              mb={2}
              alignItems="center"
              justifyContent="center"
              flex={1}
            >
              <Checkbox
                checked={selectedItems[idx].selected}
                value={idx}
                inputProps={{
                  'aria-label': 'primary checkbox'
                }}
              />
              <SuggestionItem suggestion={suggestion} />
            </Box>
          );
        })}
      </Box>
    </>
  );
};
