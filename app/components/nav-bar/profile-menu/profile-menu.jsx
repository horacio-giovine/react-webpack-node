import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import 'css/components/profile-menu'

class ProfileMenu extends Component {

  render () {
    return (
      <div id='profile-menu' className={this.props.profileClass}>
        <Link to='profile'>
          <div className='item'>
            Profile
          </div>
        </Link>
        <div className='item'>
          Logout
        </div>
      </div>
    )
  }
}

ProfileMenu.propTypes = {
  profileClass: PropTypes.string.isRequired
}

export default ProfileMenu
