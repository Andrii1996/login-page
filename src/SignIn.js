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
import salyy from './img/saly-2.png';
import first from './img/first.png';
import second from './img/second.png';
import third from './img/third.png';
import Saly from './img/Saly-12.png';
import mobile from './img/mobile.png';

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
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.down('sm')]: {
      marginTop: '140px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '80px',
      width: '330px',
      height: '460px',
    },
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
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  img: {
    position: 'absolute',
    left: '20px',
  },
  main: {
    position: 'relative',
    display: 'flex',
    background: '#e5e5e5',
    [theme.breakpoints.down('sm')]: {
      height: '1024px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '667px',
      // position: 'relative',
    },
  },
  main_sub: {
    margin: '0 auto',
    display: 'flex',
    zIndex: '1',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    },
  },
  main_form: {
    position: 'absolute',
    right: '70px',
    width: '450px',
    zIndex: '1',
    [theme.breakpoints.down('xl')]: {
      position: 'relative',
    },
    [theme.breakpoints.down('lg')]: {
      position: 'relative',
    },
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
    },
    [theme.breakpoints.down('xs')]: {
      width: '180px',
      marginRight: '50px',
    },
  },
  err: {
    color: 'red',
  },
  footer: {
    position: 'absolute',
    bottom: '0',
    maxWidth: '1800px',
    padding: '0',
    [theme.breakpoints.down('xs')]: {
      // position: 'relative',
    },
  },
  footer_img: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '275px'
    },
  },
  footer_saly: {
    position: 'absolute',
    bottom: '0',
    marginLeft: '-54%',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  footer_md: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      maxWidth: '100%',
      position: 'absolute',
      bottom: '0',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  Saly: {
    position: 'absolute',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      left: '30px'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100px',
    },
  },
  footer_last: {
    position: 'absolute',
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      bottom: '10px',
      display: 'flex',
      justifyContent: 'space-between'
    },
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
        <img alt="Saly-12" src={Saly} className={classes.Saly}/>
        <Container maxWidth="xl" className={classes.logo}>
            <img className={classes.img} src={logo} alt="main logo"/>
          </Container>
          <Container className={classes.main_form} component="main">
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
                  <Link href="#" variant="body5">
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
        <Container className={classes.footer_md}>
          <img className={classes.footer_smallImg} src={first} alt="footer"/>
          <img className={classes.footer_smallImg} src={second} alt="footer"/>
          <img className={classes.footer_smallImg} src={third} alt="footer"/>
        </Container>
        <Container className={classes.footer_last}>
          <img className={classes.footer_smallImg} src={mobile} alt="footer"/>
          <img className={classes.footer_smallImg} src={salyy} alt="footer"/>
        </Container>
      </Container>
    </div>
  );
}