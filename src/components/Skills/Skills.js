import React, { useEffect, useRef } from 'react'
import { Grid } from '@material-ui/core'
import { Power3, TweenMax } from 'gsap'
import '../../styles/skills.css'

function Skills() {

  let skills = useRef(null)

  let {
    logo, logo2, logo3, logo4,
    logo5, logo6, logo7, logo8,
    logo9, logo10, logo11, logo12
  } = useRef(null)

  useEffect(() => {
    TweenMax.to(skills, 0 , { css: { visibility: 'visible'}})
    TweenMax.staggerFrom([
      logo, logo2, logo3, logo4,
      logo5, logo6, logo7, logo8,
      logo9, logo10, logo11, logo12], 
      .6, {opacity: 0, x: 40, ease: Power3.easeOut}, .1)
  }, )

  return (
    <div 
    ref={el => skills = el}
    className="skills">
      <Grid container>
        <Grid item xs={12} className="grid-skills">
          <p id="text">Below are the programming languages, frameworks and tools that I'm familiar with <br />and are currently
            improving.</p>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="skills-container">

            <Grid 
            ref={el => logo = el} 
            item xs={6} sm={4} md={3} lg={3}>
              <i class="fab fa-node-js fa-4x" title="nodejs"></i>
            </Grid>

            <Grid 
            ref={el => logo2 = el} 
            item xs={6} sm={4} md={3} lg={3}>
              <i class="fab fa-vuejs fa-4x" title="vuejs"></i>
            </Grid>

            <Grid 
            ref={el => logo3 = el} 
            item xs={6} sm={4} md={3} lg={3}>
              <i class="fab fa-linux fa-4x" title="linux"></i>
            </Grid>

            <Grid 
            ref={el => logo4 = el} 
            item xs={6} sm={4} md={3} lg={3}>
              <i class="fab fa-react fa-4x" title="react"></i>
            </Grid>

            <Grid 
            ref={el => logo5 = el} 
            item xs={6} sm={4} md={3} lg={3}>
              <i class="fab fa-html5 fa-4x" title="html5"></i>
            </Grid>

            <Grid 
            ref={el => logo6 = el} 
            item xs={6} sm={4} md={3} lg={3}>
              <i class="fab fa-js fa-4x" title="javascript"></i>
            </Grid>

            <Grid 
            ref={el => logo7 = el} 
            item xs={6} sm={4} md={3} lg={3}>
              <i class="fab fa-adobe fa-4x" title="photoshop"></i>
            </Grid>

            <Grid 
            ref={el => logo8 = el} 
            item xs={6} sm={4} md={3} lg={3}>
              <i class="fas fa-database fa-4x" title="sql"></i>
            </Grid>

            <Grid 
            ref={el => logo9 = el} 
            item xs={6} sm={4} md={3} lg={3}>
              <i class="fab fa-docker fa-4x" title="docker"></i>
            </Grid>

            <Grid 
            ref={el => logo10 = el} 
            item xs={6} sm={4} md={3} lg={3}>
              <i class="fab fa-css3-alt fa-4x" title="css3"></i>
            </Grid>

            <Grid 
            ref={el => logo11 = el} 
            item xs={6} sm={4} md={3} lg={3}>
              <i class="fab fa-git fa-4x" title="git"></i>
            </Grid>

            <Grid 
            ref={el => logo12 = el} 
            item xs={6} sm={4} md={3} lg={3}>
              <i class="fab fa-bootstrap fa-4x" title="bootstrap"></i>
            </Grid>
          </Grid>

          <p className="text-info">Check out my latest projects on my <strong><a href="https://github.com/rejincusi">
            github</a></strong> profile</p>

        </Grid>
      </Grid>
    </div >
  )
}

export default Skills
