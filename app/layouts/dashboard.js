import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Dashboard extends Component {

  constructor (props) {
    super(props)
    this.setInitialState(props.showDashboard)
  }

  setInitialState (show) {
    show = show === '' ? 'show' : show
    this.state = {
      showDashboard: show
    }
  }

  render () {
    return (
      <div id='dashboard' className={this.props.showDashboard}>
        <Link to='Aspirations'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src='images/menu_icons/icon_vision.png' className='menu-icon' />
              <div className='menu-text'>Vision</div>
            </div>
          </div>
        </Link>

        <div className='menu-division' />

        <Link to='goals'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src='images/menu_icons/icon_goals.png' className='menu-icon' />
              <div className='menu-text'>Goals</div>
            </div>
          </div>
        </Link>

        <div className='menu-division' />

        <Link to='portfolio'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src='images/menu_icons/icon_portfolio.png' className='menu-icon' />
              <div className='menu-text'>Portfolio</div>
            </div>
          </div>
        </Link>

        <div className='menu-division' />

        <Link to='transfers'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src='images/menu_icons/icon_transfers.png' className='menu-icon' />
              <div className='menu-text'>Transfers</div>
            </div>
          </div>
        </Link>

        <div className='menu-division' />

        <Link to='advice'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src='images/menu_icons/icon_advice.png' className='menu-icon' />
              <div className='menu-text'>Advice</div>
            </div>
          </div>
        </Link>

        <div className='menu-division' />

        <Link to='performance'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src='images/menu_icons/icon_performance.png' className='menu-icon' />
              <div className='menu-text'>Performance</div>
            </div>
          </div>
        </Link>

        <div className='menu-division' />

        <Link to='community'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src='images/menu_icons/icon_community.png' className='menu-icon' />
              <div className='menu-text'>Community</div>
            </div>
          </div>
        </Link>

        <div className='menu-division' />

        <Link to='activity'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src='images/menu_icons/icon_activity.png' className='menu-icon' />
              <div className='menu-text'>Activity</div>
            </div>
          </div>
        </Link>
      </div>
      )
  }
}

Dashboard.propTypes = {
  showDashboard: PropTypes.string
}

export default Dashboard
