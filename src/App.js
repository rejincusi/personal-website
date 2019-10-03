import React from 'react';
import { BrowserRouter, Route, Link, Browser, Switch } from "react-router-dom"
import './App.css';
import { CssBaseline, Typography, Grid, Tabs, Tab } from '@material-ui/core';
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Pdf from './assets/rejincusi2019.pdf'

function App() {

  const [value, setValue] = React.useState('/');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <Grid container className="max-height main-container">
          <Grid item xs={12} sm={4} md={4} lg={4} className="grid-info max-height">
            <Typography variant="h5" component="h3">
              This is a sheet of paper.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={8} className="grid-content max-height">


            <Grid container className="content">

              <Grid item xs={12} className="content-menu">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  // indicatorColor="primary"
                  className="tab-menu"
                  variant="fullWidth"
                  // scrollButtons="auto">
                  >
                  <Tab label={<Link to="/">About</Link>} value="about"/>
                  <Tab label={<Link to="/skills">Skills</Link>} value="skills"/>
                  <Tab label={<Link to="/contact">Contact</Link>} value="contact"/>
                  <Tab label={<a href = {Pdf} target = "_blank" rel="noopener noreferrer">CV</a>} value="/cv"/>
                </Tabs>

              </Grid>

              <Grid item xs={12} className="content-route">
                <Switch>
                  <Route exact path="/" component={About} />
                  <Route exact path="/skills" component={Skills} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/cv" component={Resume} />
                </Switch>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
