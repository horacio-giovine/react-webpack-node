import React from 'react'
import { Route, IndexRoute } from 'react-router'

import HomeView from 'containers/home-view/home-view'
import PageContainer from 'containers/page-container/page-container'
import AspirationDetails from 'routes/aspiration-details/aspiration-details'
import Portfolio from 'routes/portfolio/portfolio'
import Profile from 'routes/profile/profile'
import Transfers from 'routes/transfers/transfers-section'
import Performance from 'routes/performance/performance'
import GoalDetail from 'routes/goal-detail/goal-detail'
import Vision from 'routes/vision/vision'
import Goals from 'routes/goals/goals'

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated } } = store.getState()
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
    callback()
  }

  // const redirectAuth = (nextState, replace, callback) => {
  //   const { user: { authenticated } } = store.getState()
  //   if (authenticated) {
  //     replace({
  //       pathname: '/'
  //     })
  //   }
  //   callback()
  // }

  return (
    <Route path='/' component={PageContainer}>
      <Route component={HomeView}>
        <IndexRoute component={Vision} />
        <Route path='Aspirations' component={Vision} />
        <Route path='AspirationDetails' component={AspirationDetails} />
        <Route path='vision' component={Vision} onEnter={requireAuth} />
        <Route path='GoalDetail' component={GoalDetail} onEnter={requireAuth} />
        <Route path='Goals' component={Goals} onEnter={requireAuth} />
        <Route path='Portfolio' component={Portfolio} onEnter={requireAuth} />
        <Route path='Transfers' component={Transfers} onEnter={requireAuth} />
        <Route path='Performance' component={Performance} onEnter={requireAuth} />
      </Route>
      <Route path='Profile' component={Profile} onEnter={requireAuth} />
    </Route>
  )
}
