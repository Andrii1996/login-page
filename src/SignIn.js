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
import logo from './img/logo.png';
import footer from './img/footer.png';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(30),
    marginLeft: theme.spacing(10),
    height: '526px',
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: 'rgba(254, 254, 254, 1)',
  },
  form: {
    width: '100%',
    padding: '0 25%',
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    width: '849px',
    height: '900px',
    marginLeft: '-150px',
  },
  main: {
    width: '1440px',
    position: 'relative',
    display: 'flex',
    background: '#e5e5e5',
  },
  main_sub: {
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    zIndex: '1',
  },
  err: {
    color: 'red',
  },
  footer: {
    position: 'absolute',
    bottom: '0',
    right: '185px'
  },
  footer_img: {
    width: '1440px',
  }
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

    if (!email) {
      event.preventDefault();
      setEmailErr('Email required')
      return;
    }

    if (!password) {
      event.preventDefault();
      setPasswordErr('Email password')
      return;
    }

    alert(`Email - ${email}\nPassword - ${password}`);

  }

  return (
    <div className={classes.main}>
      <div className={classes.main_sub}>
        <div className={classes.logo}>
            <img className={classes.img} src={logo} alt="main logo"/>
          </div>
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
              <TextField
                onChange={handleEmail}
                variant="outlined"
                margin="normal"
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <p className={classes.err}>{emailErr}</p>
              <TextField
                onChange={handlePassword}
                variant="outlined"
                margin="normal"
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <p className={classes.err}>{passwordErr}</p>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Log In
              </Button>
              <Grid container justify="center">
                <Grid item>
                  <Link href="#" variant="body1">
                    Forgot your password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body1">
                    {"Don't have an account yet? Register"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
      <Container maxWidth="lg" className={classes.footer}>
        <img className={classes.footer_img} src={footer} alt="footer"/>
      </Container>
    </div>
  );
}