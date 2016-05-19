import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import 'css/components/profile-button'

class ProfileButton extends Component {
  render () {
    return (
      <div id='profile-button' onClick={this.props.buttonAction}>
        <img className='profile-circle' src={this.props.imageSrc}/>
        <div className='circle-active'>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    imageSrc: state.userInformation.avatarImage
  }
}

ProfileButton.propTypes = {
  imgAlt: PropTypes.string,
  notificationNumber: PropTypes.number,
  imageSrc: PropTypes.string,
  buttonAction: PropTypes.func
}

export default connect(mapStateToProps)(ProfileButton)
