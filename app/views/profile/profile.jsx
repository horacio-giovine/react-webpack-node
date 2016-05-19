import React, { Component } from 'react'

import Avatar from 'components/profile/avatar/avatar'
import Form from 'components/profile/form/form'
import Password from 'components/profile/password/password'
import Activities from 'components/profile/activities/activities'
import Tabs from 'components/tab/tabs'
import Pane from 'components/tab/pane'
import { connect } from 'react-redux'
import 'css/components/profile'

class Profile extends Component {
  render () {
    return (
      <div id='profile' className='page'>
        <div className='page-content'>

          {/* Avatar section */}
          <div id='profile-picture-container'>
            <Avatar
              imageSource={this.props.avatarImage}
              username={`${this.props.name} ${this.props.lastName}`} />
          </div>
          <div id='tabs-container'>
            {/* Tabs */}
            <Tabs selected={0} hide={false}>
              <Pane
                label='Profile'
                className='tabs-label'
                showSpanClass='show-span'>
                {/* Profile section */}
                <Form />
              </Pane>
              <Pane
                label='Password'
                className='tabs-label'
                showSpanClass='show-span'>
                {/* Password section */}
                <Password />
              </Pane>
              <Pane
                label='Activities'
                number={5}
                className='tabs-label'
                showSpanClass='show-span'>
                {/* Activities section */}
                <Activities />
              </Pane>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    name: state.userInformation.name,
    lastName: state.userInformation.lastName,
    avatarImage: state.userInformation.avatarImage
  }
}

Profile.propTypes = {
  name: React.PropTypes.string,
  lastName: React.PropTypes.string,
  avatarImage: React.PropTypes.string
}

export default connect(mapStateToProps)(Profile)
