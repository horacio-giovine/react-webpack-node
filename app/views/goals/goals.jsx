import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageHeader from 'components/page-header/page-header'
import GoalRow from 'components/goals/goal-row/goal-row'
import 'css/components/goals'

class Goals extends Component {
  renderGoal (goal) {
    return (
      <div key={goal.desc}>
        <GoalRow
          title={goal.title}
          desc={goal.desc}
          value={goal.value}
          progress={goal.progress}
          probability={goal.probability}
          image={goal.image} />
      </div>
    )
  }
  render () {
    return (
      <div id='goals'>
        <header>
          <PageHeader
            imageSource={this.props.imageSrc}
            title={`${this.props.username.toUpperCase()}'S GOALS`}/>
        </header>
        <div>
          {this.props.goals.map(this.renderGoal)}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    username: state.userInformation.name,
    imageSrc: state.userInformation.avatarImage,
    goals: state.goals
  }
}

Goals.propTypes = {
  username: React.PropTypes.string,
  imageSrc: React.PropTypes.string,
  goals: React.PropTypes.array
}

export default connect(mapStateToProps)(Goals)
