import React, { Component } from 'react'
import '../../styles/skills.css'
import { Grid } from '@material-ui/core'
import Footer from '../../components/Footer/Footer'

export default class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <Grid container>
          <Grid item xs={12} className="grid-skills">
            <p>Below are the programming languages, frameworks and tools that I'm familiar with <br />and are currently
            improving.</p>
          </Grid>
          <Grid item xs={12}>
            <Grid container className="skills-container">

              <Grid item xs={6} sm={4} md={3} lg={3}>
                <i class="fab fa-node-js fa-5x"></i>
              </Grid>

              <Grid item xs={6} sm={4} md={3} lg={3}>
                <i class="fab fa-vuejs fa-5x"></i>
              </Grid>

              <Grid item xs={6} sm={4} md={3} lg={3}>
                <i class="fab fa-linux fa-5x"></i>
              </Grid>

              <Grid item xs={6} sm={4} md={3} lg={3}>
                <i class="fab fa-react fa-5x"></i>
              </Grid>

              <Grid item xs={6} sm={4} md={3} lg={3}>
                <i class="fab fa-html5 fa-5x"></i>
              </Grid>

              <Grid item xs={6} sm={4} md={3} lg={3}>
                <i class="fab fa-js fa-5x"></i>
              </Grid>

              <Grid item xs={6} sm={4} md={3} lg={3}>
                <i class="fab fa-adobe fa-5x"></i>
              </Grid>

              <Grid item xs={6} sm={4} md={3} lg={3}>
                <i class="fas fa-database fa-5x"></i>
              </Grid>

              <Grid item xs={6} sm={4} md={3} lg={3}>
                <i class="fab fa-docker fa-5x"></i>
              </Grid>

              <Grid item xs={6} sm={4} md={3} lg={3}>
                <i class="fab fa-css3-alt fa-5x"></i>
              </Grid>

              <Grid item xs={6} sm={4} md={3} lg={3}>
                <i class="fab fa-git fa-5x"></i>
              </Grid>

              <Grid item xs={6} sm={4} md={3} lg={3}>
                <i class="fab fa-bootstrap fa-5x"></i>
              </Grid>
            </Grid>

            <p className="text-info">Check out my latest projects on my <strong><a href="https://github.com/rejincusi">
              github</a></strong> profile</p>
            <Footer />

          </Grid>
        </Grid>
      </div >
    )
  }
}
