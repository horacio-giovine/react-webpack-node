import React, {Component, PropTypes} from 'react'

class InputError extends Component {
  render () {
    return (

      <div className=''>
        <span>{this.props.errorMessage}</span>
      </div>

    )
  }
}

export default InputError