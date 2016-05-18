import React, { Component, PropTypes } from 'react'

class Pane extends Component {
  render () {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
}

Pane.propTypes = {
  label: PropTypes.string,
  number: PropTypes.number,
  children: PropTypes.element.isRequired,
  imageSource: PropTypes.string,
  className: PropTypes.string,
  imgAlt: PropTypes.string,
  iconClass: PropTypes.string,
  showSpanClass: PropTypes.string
}

export default Pane
