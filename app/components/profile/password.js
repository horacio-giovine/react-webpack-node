import React, { Component } from 'react'

class Password extends Component {
  render () {
    return (
      <div className='panel-body body' id='password'>
        <form onSubmit={this.onFormSubmit}>
          <div className='form-group'>
            <label className='label control-label'> Current Password </label>
            <input type='text' className='form-control' />
          </div>

          <div className='form-group'>
            <label className='label control-label'> New Password </label>
            <input type='text' className='form-control' />
          </div>

          <div className='form-group'>
            <label className='label control-label'> Retype New Password </label>
            <input type='text' className='form-control' />
          </div>

          <div className='form-group'>
            <input type='submit' value='Update Password' className='button'/>
          </div>
        </form>
      </div>
    )
  }
  onFormSubmit (event) {
    event.preventDefault()
    console.log('Submit password form')
  }
}

export default Password
