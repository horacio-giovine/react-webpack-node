import React, { Component } from 'react'
import 'css/components/aspiration-detail-row'

class AspirationDetailRow extends Component {
  render () {
    var spanClass = (this.props.probability < 0.50) ? 'goal-span-red' : 'goal-span-green'
    var probabilityClass = (this.props.probability < 0.50) ? 'probability-red' : 'probability-green'
    return (
      <div className='aspiration-row-container'>
        <div className='aspiration-text'>
          <div className='span-title'>
            <span className={spanClass}> </span>
            <div className='row-title'>
              {this.props.title}
            </div>
          </div>
          <div className={probabilityClass}>
            {this.props.probability * 100}% Probability
            {this.renderFixButton()}
          </div>
        </div>
        <div className='goal-detail-link'>
          >
        </div>
      </div>
    )
  }

  renderFixButton () {
    if (this.props.probability < 0.50) {
      return (
        <div className='fix-button'>
          Fix
        </div>
      )
    }
  }
}

AspirationDetailRow.propTypes = {
  title: React.PropTypes.string.isRequired,
  probability: React.PropTypes.number.isRequired
}

export default AspirationDetailRow
