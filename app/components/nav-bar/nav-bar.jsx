import React, { Component} from 'react'
import NavBarContentContainer from 'components/nav-bar/content-container/content-container'
import Button from 'components/nav-bar/button/button'
import ProfileButton from 'components/nav-bar/profile-button/profile-button'
import ProfileMenu from 'components/nav-bar/profile-menu/profile-menu'
import Dashboard from 'layouts/dashboard/dashboard'
import { Link } from 'react-router'
import 'css/components/nav-bar'
import logo from 'images/WebLogo2-white.png'
import messages from 'images/menu_icons/icon_messages.png'
import notifications from 'images/menu_icons/icon_notifications.png'
import hamburger from 'images/menu_icons/icon_hamburger_menu.png'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.setInitialState()
    this.handleBlur = this.handleBlur.bind(this)
    this.toggleDashboard = this.toggleDashboard.bind(this)
  }

  setInitialState () {
    this.state = {
      activeItem: 'none',
      modalClass: 'hide',
      right: '',
      profileClass: 'hide',
      isShownProfile: false,
      showDashboard: 'hide',
      isPressedButton: false
    }
  }

  handleClick (item, right, modalClass, profileClass) {
    if (this.state.activeItem === item) {
      this.setState({
        activeItem: '',
        modalClass: 'hide',
        profileClass: 'hide'
      })
    } else {
      this.setState({
        activeItem: item,
        modalClass: modalClass,
        right: right,
        profileClass: profileClass
      })
    }
  }

  toggleDashboard () {
    const newState = (this.state.showDashboard === 'hide') ? 'show' : 'hide'
    this.setState({
      showDashboard: newState
    })
  }

  handleBlur () {
    this.setState({
      activeItem: '',
      modalClass: 'hide',
      profileClass: 'hide',
      right: ''
    })
  }

  render () {
    return (
      <div id='nav-bar'>
        <div className='burger'
          style={{'backgroundImage': 'url(' + hamburger + ')'}}
          onClick={this.toggleDashboard}>
        </div>
        <div className='navBrandContainer'>
          <Link to='/'>
            <img src={logo} alt='Bright Plan Branda'/>
          </Link>
        </div>
        <div className='button-container'>
          <ProfileButton
            notificationNumber={3}
            /* eslint-disable */
            buttonAction={this.handleClick.bind(this, 'Profile', '','hide', 'show')}
          />

          <Button
            notificationNumber={2}
            imgSrc={messages}
            color='#57c7d4'
            buttonAction={this.handleClick.bind(this, 'Messages', 'messages', 'show','hide')}
          />

          <Button
            notificationNumber={5}
            color='#f96868'
            imgSrc={notifications}
            buttonAction={this.handleClick.bind(this, 'Notifications', 'notifications', 'show','hide')}
          />

        </div>
        <div tabIndex='-1' onBlur={this.handleBlur}>
          <NavBarContentContainer enableOnClickOutside={true}
            customClassName={this.state.modalClass}
            header={this.state.activeItem}
            footer={this.state.activeItem}
            rightClass={this.state.right}
          />
        </div>
        <div tabIndex='-1' onBlur={this.handleBlur}>
          <ProfileMenu enableOnClickOutside={true}
            profileClass={this.state.profileClass}
          />
        </div>

      </div>
    )
  }
}

export default NavBar
