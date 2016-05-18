import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import 'css/components/dashboard'

import icon_vision from 'images/menu_icons/icon_vision.png'
import icon_goals from 'images/menu_icons/icon_goals.png'
import icon_portfolio from 'images/menu_icons/icon_portfolio.png'
import icon_transfers from 'images/menu_icons/icon_transfers.png'
import icon_advice from 'images/menu_icons/icon_advice.png'
import icon_performance from 'images/menu_icons/icon_performance.png'
import icon_community from 'images/menu_icons/icon_community.png'
import icon_activity from 'images/menu_icons/icon_activity.png'

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
        <Link to='vision'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={icon_vision} className='menu-icon'/>
              <div className='menu-text'>Vision</div>
            </div>
          </div>
        </Link>

        <div className='menu-division'/>

        <Link to='goals'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={icon_goals} className='menu-icon'/>
              <div className='menu-text'>Goals</div>
            </div>
          </div>
        </Link>

        <div className='menu-division'/>

        <Link to='portfolio'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={icon_portfolio} className='menu-icon'/>
              <div className='menu-text'>Portfolio</div>
            </div>
          </div>
        </Link>

        <div className='menu-division'/>

        <Link to='transfers'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={icon_transfers} className='menu-icon'/>
              <div className='menu-text'>Transfers</div>
            </div>
          </div>
        </Link>

        <div className='menu-division'/>

        <Link to='advice'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={icon_advice} className='menu-icon'/>
              <div className='menu-text'>Advice</div>
            </div>
          </div>
        </Link>

        <div className='menu-division'/>

        <Link to='performance'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={icon_performance} className='menu-icon'/>
              <div className='menu-text'>Performance</div>
            </div>
          </div>
        </Link>

        <div className='menu-division'/>

        <Link to='community'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={icon_community} className='menu-icon'/>
              <div className='menu-text'>Community</div>
            </div>
          </div>
        </Link>

        <div className='menu-division'/>

        <Link to='activity'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={icon_activity} className='menu-icon'/>
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
