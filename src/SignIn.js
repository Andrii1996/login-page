import React, { useState } from 'react';
import {Button,
  CssBaseline,
  Link,
  TextField,
  Grid,
  Typography,
  Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    width: '849px',
    height: '900px',
    background: 'red',
  },
  img: {
    // backgroundImage: URL('')
  },
  main: {
    display: 'flex',
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const handleEmail = (event) => {
    setEmailErr('');
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPasswordErr('');
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setEmailErr('Email required')
      return;
    }

    if (!password) {
      setPasswordErr('Email password')
      return;
    }

    alert(`Email - ${email}\nPassword - ${password}`);
  }

  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <img className={classes.img} src="./img/logo.png" alt="main logo"/>
      </div>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            onChange={handleEmail}
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
          <p>{emailErr}</p>
          <TextField
            onChange={handlePassword}
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
          <p>{passwordErr}</p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  );
}