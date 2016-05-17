import React, { Component, PropTypes } from 'react'
import 'css/components/modal-item'

class ModalItem extends Component {
  render () {
    return (
      <div id='modal-Item'>
        <div className='icon'>
          <div className='img-content'>
            <img src='' alt={this.props.imgAlt}/>
          </div>
        </div>
        <div className='section'>
          <span className='title'>
            {this.props.title}
          </span>
        </div>
        <div className='section'>
          <span className='subtitle1'>
            {this.props.subTitle1}
          </span>
        </div>
        <div className='section'>
          <span className='subtitle2'>
            {this.props.subTitle2}
          </span>
        </div>
      </div>
    )
  }
}

ModalItem.propTypes = {
  imgSource: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle1: PropTypes.string.isRequired,
  subTitle2: PropTypes.string
}
export default ModalItem
