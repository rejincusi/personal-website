import React, { useRef, useEffect } from 'react'
import { TextField, Button, Grid } from '@material-ui/core';
import '../../styles/contact.css'
import { TweenMax, Power3 } from 'gsap';

function ContactForm(props) {

  let { name, phone, email, message } = useRef(null)

  useEffect(() => {
    TweenMax.from(name, .8, {opacity: 0, x: -40, ease: Power3.easeOut, delay: .4})
    TweenMax.from(phone, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .6})
    TweenMax.staggerFrom([email, message], .8, {opacity: 0, y: 40, ease: Power3.easeOut, delay: .4})
  },)

  return (
    <div className="contact-container">
      <Grid item xs={12} className="get-in-touch">
        <h2>Get in touch</h2>
      </Grid>
      <form onSubmit={props.handleSubmit} className="msg-form">
        <Grid item xs={12} sm={10} md={8} lg={8}>
          <Grid container className="contact-container">
            <Grid 
            ref={el => name = el}
            xs={12} sm={10} md={6} lg={6} item>
              <TextField
                id="outlined-bare"
                name="name"
                className="message-form"
                placeholder="*Name"
                required={true}
                margin="normal"
                variant="outlined"
                fullWidth
                value={props.values.name}
                onChange={props.handleChange}
              />
            </Grid>

            <Grid 
            ref={el => phone = el}
            xs={12} sm={10} md={6} lg={6} item>
              <TextField
                id="outlined-bare"
                name="phone"
                className="message-form"
                placeholder="Phone"
                required={true}
                margin="normal"
                variant="outlined"
                fullWidth
                value={props.values.phone}
                onChange={props.handleChange}
              />
            </Grid>

            <Grid 
            ref={el => email = el}
            xs={12} item>
              <TextField
                id="outlined-bare"
                name="email"
                className="message-form"
                placeholder="*Email"
                required={true}
                margin="normal"
                variant="outlined"
                fullWidth
                value={props.values.email}
                onChange={props.handleChange}
              />
            </Grid>

            <Grid 
            ref={el => message = el}
            xs={12} item>
              <TextField
                id="outlined-multiline-static"
                name="message"
                multiline
                rows="4"
                placeholder="*Your message..."
                required={true}
                className="message-form"
                margin="normal"
                variant="outlined"
                fullWidth
                value={props.values.message}
                onChange={props.handleChange}
              />
            </Grid>

            <Grid xs={12} item>
              <p>{props.values.successMessage}</p>
            </Grid>

          </Grid>
        </Grid>
        <Button type="submit" variant="contained" size="large" className="sbmt-btn" color="primary">
          SEND MESSAGE
          </Button>

      </form>
    </div>
  )
}

export default ContactForm
