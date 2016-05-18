import React, { Component, PropTypes } from 'react'
import 'css/components/tab'

class Tabs extends Component {
  constructor (props) {
    super(props)

    this.setInitialState()
  }
  setInitialState () {
    this.state = {
      selected: this.props.selected
    }
  }
  handleClick (index, event) {
    event.preventDefault()
    if (index === this.state.selected && this.props.hide) {
      index = -1
    }
    this.setState({
      selected: index
    })
  }

  renderTitles () {
    function labels (child, index) {
      var activeClass = (this.state.selected === index ? 'tabs-label-active' : '')
      var spanClass = (child.props.number > 0 ? child.props.showSpanClass : 'hide-span')
      return (
        <div key={index} className='tabs-content'>
          <a href='#'
            className={activeClass + ' tabs-label'}
            /* eslint-disable */
            onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
            <span className='nav-brand-menu-img'>
              <img src={child.props.imageSource} alt={child.props.imgAlt}/>
              <i className={child.props.iconClass}></i>
              <span className={spanClass}> {child.props.number} </span>
            </span>
          </a>
        </div>
      )
    }

    return (
      <div className='tab'>
        {this.props.children.map(labels.bind(this))}
      </div>
    )
  }

  renderContent () {
    if (this.state.selected !== -1) {
      return (
        <div>
          {this.props.children[this.state.selected]}
        </div>
      )
    }
  }
  render () {
    return (
      <div>
        {this.renderTitles()}
        {this.renderContent()}
      </div>
    )
  }
}

Tabs.propTypes = {
  hide: PropTypes.bool.isRequired,
  selected: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired
}

export default Tabs
