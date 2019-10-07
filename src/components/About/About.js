import React, { Component } from 'react'
import '../../styles/about.css'
import { Grid } from '@material-ui/core'

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Grid container>
          <Grid item xs={12} className="about-info">
            <h2>About</h2>
            <p className="about-text">
              Rejin was a former singer/musician in Hong Kong, with five years
              in experienced <br/>in music industry she decided to quit her singing
              career<br/> and pursue her dream career as a web developer in The Netherlands.
            </p>

            <p>
              She recently graduate from the Codaisseur, <br/>an intensive coding bootcamp located in amsterdam.<br/>
              The bootcamp taught her to work as an independant fullstack developer.<br/>
              Besides that, she also studied online courses <br/> related in web development when she have freetime
            </p>  

            <p>
              Other then programming she is also interested in  <br/>music, photography, travel, animals and nature.
            </p>  

            <br/>
            <p>
              <i className="quotes">"The future belongs to those who believe in the beauty of their dreams."</i><br/>
              <i className="author">-Eleanor Roosevelt</i>
            </p>
           
          </Grid>
        </Grid>
      </div>
    )
  }
}
