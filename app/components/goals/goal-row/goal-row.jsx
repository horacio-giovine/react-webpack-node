import React, { Component } from 'react'
import 'css/components/goal-row'

class GoalRow extends Component {
  renderProbability () {
    if (this.props.probability != null) {
      const negativeProbability = this.props.probability < 0.50
      var spanClass = (negativeProbability) ? 'goal-span-red' : 'goal-span-green'
      var probabilityClass = (negativeProbability) ? 'probability-red' : 'probability-green'

      return (
        <div className='probability-section'>
          <div className={probabilityClass}>
            <div className='field-title'> Probability </div>
            <div className='field-value'>
              <span className={spanClass}> </span> {this.props.probability * 100}%
              {this.renderFixButton()}
            </div>
          </div>
        </div>
      )
    }
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

  render () {
    return (
      <div id='goal-row' className='row'>
        <div className='col-xs-2'>
          <img src={this.props.image} />
        </div>
        <div className='image-title col-xs-10'>
          <div className='title-link'>
            <div className='title-section col-md-3'>
              <div className='title'>
                {this.props.title}
              </div>
              <div className='desc'>
                {this.props.desc}
              </div>
            </div>
            <div className='goal-detail-link'> > </div>
          </div>
        </div>
        <div className='fields col-xs-12 col-sm-10'>
          <div className='long-fields-section col-md-3'>
            <div className='field-title'>
              Goal
            </div>
            <div className='field-value'>
              {this.props.value}
            </div>
          </div>
          <div className='long-field-section col-md-3'>
            <div className='field-title'>
              Progress to Date
            </div>
            <div className='field-value'>
              {this.props.progress}
            </div>
          </div>
          <div className='long-field-section col-md-3'>
            {this.renderProbability()}
          </div>
        </div>
      </div>
    )
  }
}

GoalRow.propTypes = {
  title: React.PropTypes.string,
  desc: React.PropTypes.string,
  value: React.PropTypes.string,
  progress: React.PropTypes.string,
  probability: React.PropTypes.number,
  image: React.PropTypes.string
}

export default GoalRow
