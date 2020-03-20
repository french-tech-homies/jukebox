import React, { FC } from 'react';
import { Typography, Card, CardContent, makeStyles, CardActionArea, CardMedia } from '@material-ui/core';
import { Playlist } from './types';

const useStyles = makeStyles({
  card: {
    width: 345
  },
  media: {
    height: 140
  }
});
interface PlaylistItemProps {
  playlist: Playlist;
}

export const PlaylistItem: FC<PlaylistItemProps> = ({ playlist }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={playlist.thumbnail} title={playlist.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {playlist.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {playlist.countOfSongs} songs
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
