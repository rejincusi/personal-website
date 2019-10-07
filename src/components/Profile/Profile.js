import React, { } from 'react'
import Png from '../../assets/rejin.png'
import '../../styles/profile.css'
import { Typography, Grid } from '@material-ui/core';

export default function Profile() {
  return (
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
              <Grid className="github" item xs={6} sm={6} md={6} lg={6} >
                <a href="https://github.com/rejincusi">
                  <i class="fab fa-github fa-2x"></i>
                </a>
              </Grid>

              <Grid className="linkedin" item xs={6} sm={6} md={6} lg={6}>
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
  )
}
