import React, { Component, PropTypes } from 'react'
import 'containers/page-container/page-container'
import NavBar from 'layouts/nav-bar/nav-bar'

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
