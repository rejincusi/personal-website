import React, { Component } from 'react'
import { TextField, Button, Grid } from '@material-ui/core';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Grid item xs={12}>
          <h1>Get in touch</h1>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="skills-container">
            <TextField
              id="outlined-bare"
              className="message-form"
              defaultValue="Name"
              margin="normal"
              variant="outlined"
              inputProps={{ 'aria-label': 'bare' }}
            />
            <TextField
              id="outlined-bare"
              className="message-form"
              defaultValue="Email"
              margin="normal"
              variant="outlined"
              inputProps={{ 'aria-label': 'bare' }}
            />

            <TextField
              id="outlined-bare"
              className="message-form"
              defaultValue="Phone"
              margin="normal"
              variant="outlined"
              inputProps={{ 'aria-label': 'bare' }}
            />
            <TextField
              id="outlined-multiline-static"
              multiline
              rows="4"
              defaultValue="Your message..."
              className="message-container"
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button variant="contained" size="large" color="secondary">
          SEND MESSAGE
        </Button>
      </div>
    )
  }
}
