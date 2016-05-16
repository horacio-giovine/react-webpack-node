import React, { Component } from 'react'
import { connect } from 'react-redux'

class Form extends Component {
  render () {
    return (
      <div className='panel-body body' id='profile-info'>
        <form onSubmit={this.onFormSubmit}>
          <div className='form-group'>
            <label className='label control-label'> First name </label>
            <input type='text' className='form-control' value={this.props.name}/>
          </div>

          <div className='form-group'>
            <label className='label control-label'> Last name </label>
            <input type='text' className='form-control' value={this.props.lastName}/>
          </div>

          <div className='form-group'>
            <label className='label control-label'> Street Address </label>
            <input type='text' className='form-control' value={this.props.streetAddress}/>
          </div>

          <div className='form-group'>
            <label className='label control-label'> City </label>
            <input type='text' className='form-control' value={this.props.city}/>
          </div>

          <div className='form-group'>
            <label className='label control-label'> State </label>
            <input type='text' className='form-control' value={this.props.state}/>
          </div>

          <div className='form-group'>
            <label className='label control-label'> Zip </label>
            <input type='text' className='form-control' value={this.props.zip}/>
          </div>

          <div className='form-group'>
            <label className='label control-label'> Date of Birth </label>
            <input type='text' className='form-control' value={this.props.dateOfBirth}/>
          </div>

          <div className='form-group'>
            <label className='label control-label'> Social Security Number </label>
            <input type='text' className='form-control' value={this.props.socialSecurityNumber}/>
          </div>

          <div className='form-group'>
            <label className='label control-label'> Phone </label>
            <input type='text' className='form-control' value={this.props.phone}/>
          </div>

          <div className='form-group'>
            <label className='label control-label'> Annual Income </label>
            <input type='text' className='form-control' value={this.props.annualIncome}/>
          </div>

          <div className='form-group'>
            <label className='label control-label'> Email </label>
            <input type='text' className='form-control' value={this.props.email}/>
          </div>
          <div className='form-group'>
            <input type='submit' value='Update Profile' className='button'/>
          </div>
        </form>
      </div>
    )
  }
  onFormSubmit (event) {
    event.preventDefault()
    console.log('Submit profile form')
  }
}

function mapStateToProps (state) {
  return {
    name: state.user.name,
    lastName: state.user.lastName,
    streetAddress: state.user.streetAddress,
    city: state.user.city,
    state: state.user.state,
    zip: state.user.zip,
    dateOfBirth: state.user.dateOfBirth,
    socialSecurityNumber: state.user.socialSecurityNumber,
    phone: state.user.phone,
    annualIncome: state.user.annualIncome,
    email: state.user.email
  }
}

Form.propTypes = {
  name: React.PropTypes.string,
  lastName: React.PropTypes.string,
  streetAddress: React.PropTypes.string,
  city: React.PropTypes.string,
  state: React.PropTypes.string,
  zip: React.PropTypes.string,
  dateOfBirth: React.PropTypes.string,
  socialSecurityNumber: React.PropTypes.string,
  phone: React.PropTypes.string,
  annualIncome: React.PropTypes.string,
  email: React.PropTypes.string
}

export default connect(mapStateToProps)(Form)
