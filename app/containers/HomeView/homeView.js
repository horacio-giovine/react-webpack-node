import React, { Component, PropTypes } from 'react'
import Dashboard from '../../layouts/Dashboard/dashboard'

class HomeView extends Component {
  render () {
    return (
      <div id='homeview'>
        <Dashboard />
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

HomeView.propTypes = {
  children: PropTypes.element
}

export default HomeView
