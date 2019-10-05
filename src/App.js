import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import { CssBaseline, Typography, Grid, } from '@material-ui/core';
import Png from './assets/rejincusi.png'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import ContactForm from './components/ContactForm/ContactFormCon'
import Menu from './components/Menu/Menu'

function App() {

  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <Grid container className="max-height main-container">
          <Grid item xs={12} sm={4} md={4} lg={4} className="grid-info">
            <div class="profile-wrapper">
              <div class="text-container">
                <Typography variant="h5" component="h3">
                  JUNIOR WEB DEVELOPER
                </Typography>
                <Grid item xs={12}>
                  <Grid container className="skills-container">

                    <Grid item xs={4} sm={4} md={3} lg={3}>
                      <i class="fab fa-github fa-3x"></i>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3}>
                      <i class="fab fa-linkedin fa-3x"></i>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3}>
                      <i class="fab fa-github fa-3x"></i>
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
  );
}

export default App;
