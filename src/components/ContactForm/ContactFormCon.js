import React, { Component } from 'react'
import ContactForm from './ContactForm'
import { connect } from 'react-redux'
import { createMessage } from '../../actions/messages'

class ContactFormCon extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    message: '',
    successMessage: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const dataToSend = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message
    }
    this.props.createMessage(dataToSend)
    this.setState({
      successMessage: "Message has been sent",
      name: '',
      phone: '',
      email: '',
      message: '',
    })
    setTimeout(
      () => {
        this.setState({
          successMessage: ''
        })
      }
      , 5000)
  }

  render() {
    return (
      <div>
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = {
  createMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormCon)
