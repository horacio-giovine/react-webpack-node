import React, { Component } from 'react'
import { Link } from 'react-router'

class Dashboard extends Component {
  render () {
    return (
      <div id='dashboard'>

        <Link to='Aspirations'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={''} className='menu-icon'/>
              <div>Vision</div>
            </div>
          </div>
        </Link>

        <div className='menu-division'/>

        <Link to='goals'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={''} className='menu-icon'/>
              <div>Goals</div>
            </div>
          </div>
        </Link>

        <div className='menu-division'/>

        <Link to='portfolio'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={''} className='menu-icon'/>
              <div>Portfolio</div>
            </div>
          </div>
        </Link>

        <div className='menu-division'/>

        <Link to='transfers'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={''} className='menu-icon'/>
              <div>Transfers</div>
            </div>
          </div>
        </Link>

        <div className='menu-division'/>

        <Link to='advice'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={''} className='menu-icon'/>
              <div>Advice</div>
            </div>
          </div>
        </Link>

        <div className='menu-division'/>

        <Link to='performance'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={''} className='menu-icon'/>
              <div>Performance</div>
            </div>
          </div>
        </Link>

        <div className='menu-division'/>

        <Link to='community'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={''} className='menu-icon'/>
              <div>Community</div>
            </div>
          </div>
        </Link>

        <div className='menu-division'/>

        <Link to='activity'>
          <div className='menu-item'>
            <div className='menu-content'>
              <img src={''} className='menu-icon'/>
              <div>Activity</div>
            </div>
          </div>
        </Link>
      </div>
      )
  }
}

export default Dashboard
