import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import { CssBaseline, Typography, Grid, } from '@material-ui/core';
import Png from './assets/rejin.png'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import ContactForm from './components/ContactForm/ContactFormCon'
import Menu from './components/Menu/Menu'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e79b96'
    }
  }
})

function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <Grid container className="max-height main-container">
            <Grid item xs={12} sm={4} md={4} lg={4} className="grid-info">
              <div className="profile-wrapper">
                <div className="text-container">
                  <Typography variant="h5" component="h3">
                    REJIN CUSI
                  </Typography>

                  <Typography variant="h6" component="h3">
                    JUNIOR SOFTWARE DEVELOPER
                  </Typography>

                  <Grid item xs={12} >
                    <Grid container classsName="icons">
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <a href="https://github.com/rejincusi">
                          <i class="fab fa-github fa-2x"></i>
                        </a>
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <a href="https://www.linkedin.com/in/rejin-cusi-9b84b9178/">
                          <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                      </Grid>

                    </Grid>
                  </Grid>

                </div>
                <div class="img-container">
                  <img src={Png} alt="rej" className="img-png" />
                </div>
              </div>

            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={8} className="grid-content">

              <Menu />

              <Grid item xs={12} className="content-route">
                <Switch>
                  <Route exact path="/" component={About} />
                  <Route exact path="/skills" component={Skills} />
                  <Route exact path="/contact" component={ContactForm} />
                </Switch>
              </Grid>

            </Grid>
          </Grid>
        </React.Fragment>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
