import React, { Component} from 'react'
import Card from '../../components/aspiration-card/aspiration-card'
import AddCard from '../../components/add-aspiration-card/add-aspiration-card'
import PageHeader from '../../components/page-header/page-header'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class VisionContainer extends Component {
  render () {
    return (
      <div id='vision-container'>
        <div className='header'>
          <PageHeader imageSource={this.props.imageSrc} title={`${this.props.username.toUpperCase()}'S LIFE VISION`} />
        </div>
        <div className='content'>
          <div className='col-xs-12 col-sm-6 col-lg-4 no-padding-left position-static'>
            <Link to='AspirationDetails'>
              <Card
                title='Financial Security'
                text='A future where I only work when I want to'
                activeGoal={5}
                imageSrc='./aspiration_finsec_small.png'
              />
            </Link>
          </div>
          <div className='col-xs-12 col-sm-6 col-lg-4 no-padding-left position-static'>
            <Card
              title='Health'
              text='I want to lead a healthier lifestyle'
              activeGoal={5}
              imageSrc='./aspiration_health_small.png'
            />
          </div>
          <div className='col-xs-12 col-sm-6 col-lg-4 no-padding-left position-static'>
            <Card
              title='Education'
              text='I Hardvard University'
              activeGoal={5}
              imageSrc='./aspiration_edu_small.png'
            />
          </div>
          <div className='col-xs-12 col-sm-6 col-lg-4 no-padding-left position-static'>
            <AddCard
              srcImage='./aspiration_new.png'
            />
          </div>
        </div>
        <div className='social col-xs-12'>
          <div className='media-option'>
            <span className='text'>POST</span>
            <div className='icons'>
              <img className='media-icon' src='./icon_pinterest.png' />
              <img className='media-icon' src='./icon_facebook.png' />
              <div className='printer-icon'>
                <span className='text'>PRINT</span>
                <img src='./icon_printer.png' />
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
    username: state.user.name,
    imageSrc: state.user.avatarImage
  }
}

VisionContainer.propTypes = {
  username: React.PropTypes.string,
  imageSrc: React.PropTypes.string
}

export default connect(mapStateToProps)(VisionContainer)
