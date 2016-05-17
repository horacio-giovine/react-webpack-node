import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';
import 'css/vendor/normalize'
import 'css/vendor/bootstrap/bootstrap.min'
import 'css/components/page-container'
import NavBar from 'components/nav-bar/nav-bar'

export class PageContainer extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <div id='page-container'>
          <div className='content'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

PageContainer.propTypes = {
  children: PropTypes.element
}

export default PageContainer
