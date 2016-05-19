import React, { Component } from 'react'
import { connect } from 'react-redux'

class Activities extends Component {
  renderRow (activity) {
    return (
      <tr>
        <td> {activity.name} </td>
        <td> {activity.type} </td>
        <td> {activity.date} </td>
        <td> {activity.desc} </td>
      </tr>
    )
  }

  render () {
    return (
      <div className='panel-body body' id='activities'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.activities.map(this.renderRow)}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps ({ activities }) {
  return { activities }
}

Activities.propTypes = {
  activities: React.PropTypes.array
}

export default connect(mapStateToProps)(Activities)
