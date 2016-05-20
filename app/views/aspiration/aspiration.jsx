import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
//import { saveUser } from 'actions/login';
import { Router, Route, Link, RouteHandler, withRouter } from 'react-router';
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux';
import 'css/components/aspiration'
import Header from 'components/page-header/page-header'

class Aspiration extends Component {


  constructor (props) {
    super(props)
    this.setInitialState()
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  setInitialState () {
    this.state = {
    }
  }

  handleClick (event){
  }

  handleChange (event){
  }

  handleSubmit (event) {
  }

  render () {
    return (
      <div id='loginform'>
        <div id='page-header'>
          <center>
            <img src={this.props.imageSrc}/>
            <span> {this.props.title} </span>
            <img src={this.props.imageSource}/>
          </center>
        </div>
       <form className="donationForm" onSubmit={this.handleSubmit}>
        <div>
          <p className='label'>Describe your aspiration </p>
          <input
            id='fullname'
            placeholder='A future where I only work when I want to'
            required={true}
            className='textbox'
            type='text'
            pattern='[A-Za-z]{1,50}'
            title="Username should only contain letters. e.g. John"
            value={this.state.fullname}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <p className='label'>Why is this your aspiration?</p>
          <input
            id='email'
            placeholder='I want to decide how to invest my time'
            required={true}
            emptyMessage="Email is required"
            className='textbox'
            type='email'
            value={this.state.email}
            validate={this.state.validateEmail}
            onChange={this.handleChange}
            />
        </div>
        <div>
          <p className='label'>What is your mantra for this aspiration? </p>
          <input
            id='email'
            placeholder='I am saving now for a worry free future'
            required={true}
            emptyMessage="Email is required"
            className='textbox'
            type='email'
            value={this.state.email}
            validate={this.state.validateEmail}
            onChange={this.handleChange}
            />
        </div>
        <div>
          <p className='label'>Describe your aspiration </p>
          <input
            className='button'
            type="submit"
            value="Next"
            onClick={this.handleClick}
          />
          <input
            className='button'
            type="submit"
            value="Next"
            onClick={this.handleClick}
          />
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


function mapStateToProps (state) {
  return {
    title: state.aspiration.title,
    imageSrc: state.aspiration.imageSrc
  }
}

Aspiration.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
}



/*0function mapDispatchToProps(dispatch){
 return bindActionCreators({ saveUser }, dispatch);
}*/

export default Aspiration
