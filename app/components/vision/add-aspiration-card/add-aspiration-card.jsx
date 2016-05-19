import React, { Component, PropTypes } from 'react'
import 'css/components/add-aspiration-card'

class AddAspirationCard extends Component {
  render () {
    return (
      <div id='addVisionCard'>
        <div>
          <img src={this.props.srcImage}/>
        </div>
      </div>
    )
  }
}

AddAspirationCard.propTypes = {
  backColor: PropTypes.string,
  srcImage: PropTypes.string
}

export default AddAspirationCard
