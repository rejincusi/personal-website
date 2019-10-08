import React, { Component } from 'react'
import { TextField, Button, Grid } from '@material-ui/core';
import '../../styles/contact.css'

export default class ContactForm extends Component {
  render() {
    return (
      <div className="contact-container">
        <Grid item xs={12} className="get-in-touch">
          <h2>Get in touch</h2>
        </Grid>
        <form onSubmit={this.props.handleSubmit} className="msg-form">
          <Grid item xs={12} sm={10} md={8} lg={8}>
            <Grid container className="contact-container">
              <Grid xs={12} sm={10} md={6} lg={6} item>
                <TextField
                  id="outlined-bare"
                  name="name"
                  className="message-form"
                  placeholder="*Name"
                  required={true}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  value={this.props.values.name}
                  onChange={this.props.handleChange}
                />
              </Grid>

              <Grid xs={12} sm={10} md={6} lg={6} item>
                <TextField
                  id="outlined-bare"
                  name="phone"
                  className="message-form"
                  placeholder="Phone"
                  required={true}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  value={this.props.values.phone}
                  onChange={this.props.handleChange}
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  id="outlined-bare"
                  name="email"
                  className="message-form"
                  placeholder="*Email"
                  required={true}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  value={this.props.values.email}
                  onChange={this.props.handleChange}
                />
              </Grid>

              <Grid xs={12} item>
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
                  value={this.props.values.message}
                  onChange={this.props.handleChange}
                />
              </Grid>

              <Grid xs={12} item>
                <p>{this.props.values.successMessage}</p>
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
}
