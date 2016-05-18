import React, { Component, PropTypes } from 'react'
import 'css/components/aspiration-card'

class AspirationCard extends Component {
  render () {
    return (
      <div id='vision-card' style={{'backgroundImage': 'url(' + this.props.imageSrc + ')'}}>
        <div className='content'>
          <div className='header'>
            <span>ASPIRATION</span>
          </div>
          <div className='title'>
            <span>
              {this.props.title}
            </span>
          </div>
          <div className='text' >
            <span>
              {this.props.text}
            </span>
          </div>
          <div className='activeGoal'>
            <span>
              {this.props.activeGoal} ACTIVE GOALS
            </span>
          </div>
        </div>
      </div>
    )
  }
}

AspirationCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  activeGoal: PropTypes.number,
  imageSrc: PropTypes.string
}

export default AspirationCard
