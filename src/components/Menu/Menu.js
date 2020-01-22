import React, { } from 'react'
import Pdf from '../../assets/rejincusi2020.pdf'
import { Link } from "react-router-dom"
import { Grid } from '@material-ui/core';
import '../../styles/menu.css'

function Menu() {

  return (
    <div>
      <Grid container className="content">

        <Grid item xs={12} className="content-menu">

          <Grid item xs={6} sm={4} md={3} lg={3}>
            <Link to="/">
              <h3>ABOUT</h3>
            </Link>
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={3}>
            <Link to="/skills">
              <h3>SKILLS</h3>
            </Link>
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={3}>
            <Link to="/contact">
              <h3>CONTACT</h3>
            </Link>
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={3}>
            <a href={Pdf} target="_blank" rel="noopener noreferrer">
              <h3>CV</h3>
            </a>
          </Grid>

        </Grid>
      </Grid>
    </div>
  )
}

export default Menu