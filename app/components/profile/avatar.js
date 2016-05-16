import React, { Component } from 'react'

class Avatar extends Component {
  render () {
    return (
      <div className='widget widget-shadow text-center'>
        <div className='widget-header'>
          <div className='widget-header-content'>
            <a className='avatar'>
              <img src={this.props.imageSource} />
            </a>
            <h4 className='profile-user'>{this.props.username}</h4>
            <p className='profile-job'></p>
          </div>
        </div>
      </div>
    )
  }
}

Avatar.propTypes = {
  imageSource: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired
}

export default Avatar
