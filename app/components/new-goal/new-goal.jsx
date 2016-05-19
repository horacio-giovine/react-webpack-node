import React, { Component } from 'react'
import new_goal from 'images/new-goal.png'

class NewGoal extends Component {
  render () {
    return (
      <div className='new-goal-container'>
        <img src={new_goal}/>
      </div>
    )
  }
}

export default NewGoal
