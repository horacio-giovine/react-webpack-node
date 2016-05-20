import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { saveUser } from 'actions/login';
import { Router, Route, Link, RouteHandler, withRouter } from 'react-router';
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux';
import 'css/components/login-form'

class LoginForm extends Component {


  constructor (props) {
    super(props)
    this.setInitialState()
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  setInitialState () {
    this.state = {
      email: '',
      fullname: '',
      validateEmail: false


    }
  }

  handleClick (event){
    console.log('CLICK',event);
    this.props.saveUser(this.state);
  }

  handleChange (event){

    if(event.target.id === 'email'){
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.setState({
                      email: event.target.value,
                      validateEmail: re.test(event.target.value)
                   })
    }else if(event.target.id === 'fullname'){

      this.setState({
                      fullname: event.target.value,
                      contributor: event.target.value
                   })
    }

  }


  handleSubmit (event) {
    event.preventDefault()
    console.log('this.props.router', this.props.router)
    this.props.router.push('/')
  }

  render () {
    return (

      <div id='loginform'>
       <form className="donationForm" onSubmit={this.handleSubmit}>
        <div>
          <p className='label'>What may I call you?</p>
          <input
            id='fullname'
            placeholder='Full name'
            required={true}
            className='textbox'
            type='text'
            pattern='[A-Za-z]{1,50}'
            title="Username should only contain letters. e.g. John"
            value={this.state.fullname}
            onChange={this.handleChange}
          />
          <p className='labelbottom'>First and last name works well too</p>
        </div>
        <div>
          <p className='label'>Email</p>
          <input
            id='email'
            placeholder='e-mail'
            required={true}
            emptyMessage="Email is required"
            className='textbox'
            type='email'
            value={this.state.email}
            validate={this.state.validateEmail}
            onChange={this.handleChange}
            />
          <p className='labelbottom'>Provide your email</p>
        </div>
        <div>
          <input
            className='button'
            type="submit"
            value="Next"
            onClick={this.handleClick}
          />
        </div>
      </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string
}

function mapDispatchToProps(dispatch){
 return bindActionCreators({ saveUser }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(LoginForm))
