import React, { Component } from 'react'
import AspirationDetailRow from 'components/aspiration-detail/aspiration-detail-row/aspiration-detail-row'
import NewGoal from 'components/new-goal/new-goal'
import PageHeader from 'components/page-header/page-header'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import 'css/components/aspiration-details'

class AspirationDetails extends Component {

  renderGoal (goal) {
    return (
      <div key={goal.title}>
        <Link to='goal-detail'>
          <AspirationDetailRow title={goal.title} probability={goal.probability}/>
        </Link>
      </div>
    )
  }

  render () {
    var detailBackground = {
      backgroundImage: 'url(' + this.props.cardImage + ')'
    }
    return (
      <div id='aspiration-details'>
        {/* Header */}
        <div className='page-header'>
          <PageHeader imageSource={this.props.imageSrc} title={`${this.props.username.toUpperCase()}'S LIFE VISION`}/>
        </div>
        {/* Details */}
        <div className='detail-container'>
          {/* Aspiration component container */}
          <div className='aspiration-container' style={detailBackground}>
            <div className='text-over-image'>
              <div> ASPIRATION </div>
              <h2> {this.props.title} </h2>
              <div className='only-desktop'> {this.props.what} </div>
              <div className='only-desktop'> {this.props.goals.length} ACTIVE GOALS </div>
            </div>
          </div>
          {/* What/Why/Mantra/Confidence */}
          <div className='text-container'>
            <div className='field-container'>
              <div className='field-title'> What </div>
              <div className='field-value'> {this.props.what} </div>
            </div>
            <div className='field-container'>
              <div className='field-title'> Why </div>
              <div className='field-value'> {this.props.why} </div>
            </div>
            <div className='field-container'>
              <div className='field-title'> Mantra </div>
              <div className='field-value'> {this.props.mantra} </div>
            </div>
            <div className='field-container'>
              <div className='field-title'> Confidence </div>
              <div className='field-value'> {this.props.confidence} </div>
            </div>
          </div>
        </div>
        {/* Rows */}
        <div className='goals-rows'>
          {this.props.goals.map(this.renderGoal)}
        </div>
        {/* New goal */}
        <center>
          <NewGoal />
        </center>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    username: state.userInformation.name,
    imageSrc: state.userInformation.avatarImage,
    aspirationTitle: state.aspirations[0].title,
    cardColor: state.aspirations[0].color,
    cardImage: state.aspirations[0].image,
    title: state.aspirations[0].title,
    what: state.aspirations[0].what,
    why: state.aspirations[0].why,
    mantra: state.aspirations[0].mantra,
    confidence: state.aspirations[0].confidence,
    goals: state.aspirations[0].goals
  }
}

AspirationDetails.propTypes = {
  username: React.PropTypes.string,
  imageSrc: React.PropTypes.string,
  aspirationTitle: React.PropTypes.string,
  cardColor: React.PropTypes.string,
  cardImage: React.PropTypes.string,
  title: React.PropTypes.string,
  what: React.PropTypes.string,
  why: React.PropTypes.string,
  mantra: React.PropTypes.string,
  confidence: React.PropTypes.string,
  goals: React.PropTypes.array
}

export default connect(mapStateToProps)(AspirationDetails)
