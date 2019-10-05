import React, { Component } from 'react'
import '../../styles/about.css'
import { Grid } from '@material-ui/core'
import Footer from '../../components/Footer/Footer'

export default class About extends Component {
  render() {
    return (
      <div className="about">
          <Grid container>
          <Grid item xs={12} className="about-info">
            <h2>About</h2>
            <p>
              Rejin was a former singer/musician in Hong Kong, with five years <br/>in experienced in music industry
              she decided to quit her singing <br/>career and pursue her dreams in The Netherlands.<br/><br/>

              During her singing career, She explore different hobbies and passion, <br/>She also worked as a Barista.
              Who doesn't love coffee? <br/>It's a lot of fun job! Meeting interesting people, <br/> give them a cup of coffee and serve them with a smile. <br/><br/>

              Years in hard working abroad has been paid off. <br/>Rejin established a small business transportation in The Philippines.
              <br/><br/>

              Searching and finding what who you really are is the hardest thing in life. <br/>
              Rejin knew that she always wanted to do something even more, and then she realized <br/>that she want to pursue the world of programming. <br/>

              She want to do this from now on till when she gets old because you are never too old to code.
          <br/><br/>
            </p>

            <Footer />
          </Grid>
        </Grid>
      </div>
    )
  }
}
