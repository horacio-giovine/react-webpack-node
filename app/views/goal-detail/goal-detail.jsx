import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import PageHeader from 'components/page-header/page-header'
import 'css/components/goal-detail'

import image_montecarlo from 'images/monte_carlo_A_large.png'
import image_facebook from 'images/icon_facebook.png'
import image_pinterest from 'images/icon_pinterest.png'
import image_email from 'images/icon_email_grey.png'

export class PageContainer extends Component {
  render () {
    return (
      <div id='goal-detail'>
        <header className='header'>
          <PageHeader imageSource={this.props.imageSrc} title={this.props.username.toUpperCase() + "'S LIFE VISION"}/>
        </header>
        <div className='detail-section'>
          <div className='col-xs-3  goal-image position-static'>
            <img src={this.props.goalDetail.image} />
          </div>
          <div className='text col-xs-4 col-sm-8 col-md-3 position-static'>
            <div className='title'>FINANCIAL SECURITY</div>
            <div className='description'>{this.props.goalDetail.goalTitle}</div>
          </div>
          <div className='text col-xs-4 col-md-4 position-static'>
            <div className='portfolio-button'>View Portfolio</div>
          </div>
        </div>
        <div className='col-xs-0 col-md-2'>
        </div>
        <div className='light-color col-xs-12 col-md-10 position-static'>
          <div className='col-xs-10 col-md-4 no-padding-left no-padding-right padding-bottom-20  position-static'>
            <div className='row no-margin-left'>
              <span className='field-title'> Goal </span>
              <span>${this.props.goalDetail.goal}</span>
            </div>
          </div>
          <div className='col-xs-10 col-md-4 no-padding-left no-padding-right padding-bottom-20  position-static'>
            <div className='row no-margin-left'>
              <span className='field-title'> Progress to Date </span>
              <span>${this.props.goalDetail.progress}</span>
            </div>
          </div>
          <div className='col-xs-10 col-md-4 no-padding-left no-padding-right padding-bottom-20  position-static'>
            <div className='row no-margin-left'>
              <span className='field-title'> Probability </span>
              <span>{this.props.goalDetail.probability}%</span>
            </div>
          </div>
          <div className='col-xs-10 col-md-4 no-padding-left no-padding-right padding-bottom-20  position-static'>
            <div className='row no-margin-left'>
              <span className='field-title'> Start Date </span>
              <span>{this.props.goalDetail.startDate}</span>
            </div>
          </div>
          <div className='col-xs-10 col-md-4 no-padding-left no-padding-right padding-bottom-20 position-static'>
            <div className='row no-margin-left'>
              <span className='field-title'> Target Date </span>
              <span>{this.props.goalDetail.targetDate}</span>
            </div>
          </div>
          <div className='col-xs-10 col-md-7 no-padding-left'>
            <div className='row no-margin-left'>
              <span className='field-title'> Funding Source </span>
              <span>{this.props.goalDetail.fundingSource}</span>
            </div>
          </div>
        </div>
        <div className='chart col-xs-12 col-md-10'>
          <p>PROBABILITY OF SUCCESS</p>
          <img src={image_montecarlo} />
          <div className='col-xs-12 chart-data'>
            <div className='col-xs-2'></div>
            <div className='col-xs-12 col-sm-3'>
              <b>Last Deposit </b>
              <span>{this.props.goalDetail.lastDeposit}</span>
            </div>
            <div className='col-xs-12 col-sm-6'>
              <b>Amount </b>
              <span>${this.props.goalDetail.amount}</span>
            </div>
          </div>
        </div>
        <div className='social col-xs-10'>
          <div className='media-option'>
            <span className='text col-xs-12 col-md-4'>SHARE GOAL WITH SPONSOR</span>
            <div className='icons col-xs-12 col-md-8'>
              <img className='media-icon' src={image_pinterest}/>
              <img className='media-icon' src={image_facebook}/>
              <img className='media-icon' src={image_email}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    username: state.userInformation.name,
    imageSrc: state.userInformation.avatarImage,
    goalDetail: state.goalDetail
  }
}

PageContainer.propTypes = {
  children: PropTypes.element,
  goalDetail: PropTypes.object,
  username: React.PropTypes.string,
  imageSrc: React.PropTypes.string
}

export default connect(mapStateToProps)(PageContainer)
