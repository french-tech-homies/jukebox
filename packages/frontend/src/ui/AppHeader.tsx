import React from 'react';
import { AppBar, Toolbar, makeStyles, createStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    }
  })
);

export const AppHeader = () => {
  const classes = useStyles({});
  return (
    <AppBar position="static" color="default" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h4">Habibiz - Jukebox</Typography>
      </Toolbar>
    </AppBar>
  );
};
