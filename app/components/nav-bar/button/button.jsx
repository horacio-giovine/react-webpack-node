import React, {Component, PropTypes} from 'react'

class NavBarButton extends Component {
  render () {
    return (
      <div className='nav-brand-menu-button' onClick={this.props.buttonAction}>
        <img className='navBrandMenu-Img'src={this.props.imgSrc} alt={this.props.imgAlt}/>
        <div className='nav-brand-menu-circle-number'>
          <div className='nav-brand-menu-number'
            style={{' backgroundColor': this.props.color}}>
            <span>{this.props.notificationNumber}</span>
          </div>
        </div>
      </div>
    )
  }
}

NavBarButton.propTypes = {
  imgAlt: PropTypes.string,
  notificationNumber: PropTypes.number,
  imgSrc: PropTypes.string,
  color: PropTypes.string,
  buttonAction: PropTypes.func
}

export default NavBarButton
