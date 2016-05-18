import React, { Component } from 'react'
import 'css/components/page-header'

class PageHeader extends Component {
  render () {
    return (
      <div id='page-header'>
        <center>
          <img src={this.props.imageSource}/>
          <span> {this.props.title} </span>
        </center>
      </div>
    )
  }
}

PageHeader.propTypes = {
  imageSource: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
}

export default PageHeader
