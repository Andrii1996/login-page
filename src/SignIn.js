import React, { useState } from 'react';
import {CssBaseline,
  Link,
  TextField,
  Grid,
  Typography,
  Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './img/logo.png';
import footer from './img/footer.png';
import saly from './img/saly.png';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(30),
    height: '526px',
    width: '450px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: 'rgba(254, 254, 254, 1)',
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)'
  },
  form: {
    width: '100%',
    padding: '0 20%',
    textAlign: 'center',
  },
  submit: {
    width: '212px',
    height: '48px',
    margin: theme.spacing(3, 0, 2),
    color: 'white',
    fontSize: '18px',
    fontWeight: '500',
    background: 'linear-gradient(90deg, #FF9146 0%, #FF351B 100%)',
    borderRadius: '5px',
  },
  logo: {
    width: '849px',
    height: '900px',
    marginLeft: '-150px',
  },
  main: {
    // maxWidth: '1440px',
    position: 'relative',
    display: 'flex',
    background: '#e5e5e5',
  },
  main_sub: {
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
    maxWidth: '1800px',
  },
  footer_img: {
    width: '100%',
  },
  footer_saly: {
    position: 'absolute',
    bottom: '0',
    marginLeft: '-47%',
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
        <Container maxWidth="xl" className={classes.logo}>
            <img className={classes.img} src={logo} alt="main logo"/>
          </Container>
          <Container component="main">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h4">
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
              <button
                type="submit"
                className={classes.submit}
              >
                Log In
              </button>
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
        <img className={classes.footer_saly} src={saly} alt="saly"/>
      </Container>
    </div>
  );
}