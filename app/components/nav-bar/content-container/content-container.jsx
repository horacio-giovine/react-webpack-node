import React, { Component, PropTypes } from 'react'
import Item from 'components/nav-bar/modal-item/modal-item'
import 'css/components/content-container'

class NavBarContentContainer extends Component {
  render () {
    return (
      <div id='modal-content' className={this.props.customClassName + ' ' + this.props.rightClass}>
        <div className='header'>
          <div className='title'>
            {this.props.header}
          </div>
          <div className='news'>
            <span>New 5</span>
          </div>
        </div>
        <div className='content'>
          <Item
            title='title 1'
            subTitle1='subTitle1'
            subTitle2='subTitle2'
          />
          <Item
            title='title 2'
            subTitle1='subTitle1'
            subTitle2='subTitle2'
          />
          <Item
            title='title 3'
            subTitle1='subTitle1'
            subTitle2='subTitle2'
          />
        </div>
        <div className='footer'>
          <a>
            {this.props.footer}
          </a>
        </div>
      </div>
    )
  }
}

NavBarContentContainer.propTypes = {
  customClassName: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  rightClass: PropTypes.string.isRequired
}

export default NavBarContentContainer
