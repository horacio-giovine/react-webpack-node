import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tabs from 'components/tab/tabs'
import Pane from 'components/tab/pane'

class Portfolio extends Component {
  renderGoal (goal) {
    var displayBonds = goal.bonds != null ? 'show goal-bonds col-xs-10' : 'hide'
    var stockValue = (1 - goal.bonds) * 100
    return (
      <div className='goal-row'>
        <div className='goal-value col-xs-4'> {goal.progress} </div>
        <div className='goal-value col-xs-4'> {goal.desc} </div>
        <div className='goal-value col-xs-4' > {goal.value} </div>
        <div className={displayBonds}> {goal.bonds * 100}% Bonds, {stockValue}% Stock </div>
      </div>
    )
  }
  // TODO: Ask from where we should get that info
  renderLastRow () {
    return (
      <div className='goal-row'>
        <div className='goal-value col-xs-4'> %0.19 </div>
        <div className='goal-value col-xs-4'> Time Weighted Return </div>
      </div>
    )
  }
  render () {
    return (
      <div id='portfolio'>
        <div id='tabs-container'>
          <Tabs selected={0} hide={false}>
            <Pane
              label='Overview'
              className='tabs-label'>
              <div>
                {this.props.goals.map(this.renderGoal)}
                {this.renderLastRow()}
              </div>
            </Pane>
            <Pane
              label='Plan'
              className='tabs-label'>
              <div> Plan component </div>
            </Pane>
            <Pane
              label='Transfer'
              className='tabs-label'>
              <div> Transfer component</div>
            </Pane>
            <Pane
              label='Activity'
              className='tabs-label'>
              <div> Activity component</div>
            </Pane>
          </Tabs>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    username: state.user.name,
    imageSrc: state.user.avatarImage,
    goals: state.goals
  }
}

Portfolio.propTypes = {
  username: React.PropTypes.string,
  imageSrc: React.PropTypes.string,
  goals: React.PropTypes.array
}

export default connect(mapStateToProps)(Portfolio)
