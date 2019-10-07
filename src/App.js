import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import { CssBaseline, Grid } from '@material-ui/core';
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import ContactForm from './components/ContactForm/ContactFormCon'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'
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
            <Profile />
            <Grid item xs={12} sm={8} md={8} lg={8} className="grid-content">
              <Menu />
              <Grid item xs={12} className="content-route">
                <Switch>
                  <Route exact path="/" component={About} />
                  <Route exact path="/skills" component={Skills} />
                  <Route exact path="/contact" component={ContactForm} />
                </Switch>
              </Grid>
              <Footer />
            </Grid>
          </Grid>
        </React.Fragment>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
