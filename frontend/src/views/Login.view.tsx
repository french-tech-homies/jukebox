import React, { FC, useState, ChangeEvent, useCallback, FormEvent } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { authClient } from '../services/auth.client';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Login: FC = () => {
  const classes = useStyles();
  const [form, setValues] = useState({ username: '', password: '' });
  const updateField = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onLogin = useCallback(
    async (evt: FormEvent) => {
      evt.preventDefault();
      console.log('on Login');
      window.open(
        'http://localhost:4000/auth/google?successUrl=http://localhost:3000',
        'Sign In',
        'height=500,width=400,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes'
      );
      //   window.open('http://localhost:4000/auth/google?successUrl=http://localhost:3000');

      //   authClient.get('/auth/google?successUrl=http://localhost:3000');
      try {
        // const token = await apiService.login(form.username, form.password);
        // console.log('Connection succeeded', token);
        // localStorage.setItem('token', token);
        // history.push('/home');
      } catch (error) {
        console.error('Error submitting form!', error);
      }
    },
    [form]
    // history]
  );
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={onLogin} className={classes.form} noValidate>
          <TextField
            onChange={updateField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={updateField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign In
          </Button>
          <Button
            onClick={() => {
              window.open(
                'http://localhost:4000/auth/spotify`?successUrl=http://localhost:3000',
                'Sign In',
                'height=500,width=400,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes'
              );
              //   authClient.get('/auth/spotify');
            }}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Spotify
          </Button>
          <Button
            fullWidth
            onClick={() => {
              authClient.get('/me');
            }}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Get User Infos
          </Button>
        </form>
      </div>
    </Container>
  );
};
