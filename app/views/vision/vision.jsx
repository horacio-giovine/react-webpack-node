import React, { Component} from 'react'
import Card from 'components/vision/aspiration-card/aspiration-card'
import AddCard from 'components/vision/add-aspiration-card/add-aspiration-card'
import PageHeader from 'components/page-header/page-header'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import 'css/components/vision'

import image_financial_security from 'images/aspiration_finsec_small.png'
import image_health from 'images/aspiration_health_small.png'
import image_education from 'images/aspiration_edu_small.png'
import image_new_aspiration from 'images/aspiration_new.png'
import image_printer from 'images/icon_printer.png'
import image_facebook from 'images/icon_facebook.png'
import image_pinterest from 'images/icon_pinterest.png'

class VisionContainer extends Component {
  render () {
    return (
      <div id='vision-container'>
        <div className='header'>
          <PageHeader imageSource={this.props.imageSrc} title={`${this.props.username.toUpperCase()}'S LIFE VISION`}/>
        </div>
        <div className='content'>
          <div className='col-xs-12 col-sm-6 col-lg-4 no-padding-left position-static'>
            <Link to='aspiration-details'>
              <Card
                title='Financial Security'
                text='A future where I only work when I want to'
                activeGoal={5}
                imageSrc={image_financial_security}
              />
            </Link>
          </div>
          <div className='col-xs-12 col-sm-6 col-lg-4 no-padding-left position-static'>
            <Card
              title='Health'
              text='I want to lead a healthier lifestyle'
              activeGoal={5}
              imageSrc={image_health}
            />
          </div>
          <div className='col-xs-12 col-sm-6 col-lg-4 no-padding-left position-static'>
            <Card
              title='Education'
              text='I Hardvard University'
              activeGoal={5}
              imageSrc={image_education}
            />
          </div>
          <div className='col-xs-12 col-sm-6 col-lg-4 no-padding-left position-static'>
            <AddCard
              srcImage={image_new_aspiration}
            />
          </div>
        </div>
        <div className='social col-xs-12'>
          <div className='media-option'>
            <span className='text'>POST</span>
            <div className='icons'>
              <img className='media-icon' src={image_pinterest}/>
              <img className='media-icon' src={image_facebook}/>
              <div className='printer-icon'>
                <span className='text'>PRINT</span>
                <img src={image_printer}/>
              </div>
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
    imageSrc: state.userInformation.avatarImage
  }
}

VisionContainer.propTypes = {
  username: React.PropTypes.string,
  imageSrc: React.PropTypes.string
}

export default connect(mapStateToProps)(VisionContainer)
