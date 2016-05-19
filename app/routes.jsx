import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PageContainer from 'containers/page-container/page-container';
import HomeView from 'containers/home-view/home-view'
import Profile from 'views/profile/profile'
import Vision from 'views/vision/vision'
import AspirationDetails from 'views/aspiration-details/aspiration-details'
import GoalDetail from 'views/goal-detail/goal-detail'
import Goals from 'views/goals/goals'

import LoginOrRegister from 'containers/LoginOrRegister'
/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      replace({
        pathname: '/'
      });
    }
    callback();
  };
  return (
    <Route path='/' component={PageContainer}>
      <Route component={HomeView}>
        <IndexRoute component={Vision}/>
        <Route path='vision' component={Vision} />
        <Route path='aspiration-details' component={AspirationDetails} />
        <Route path='goal-detail' component={GoalDetail} />
        <Route path='goals' component={Goals} />
        <Route path='login' component={LoginOrRegister} />
      </Route>
      <Route path='profile' component={Profile} />
    </Route>
  );
};

// <Route path='Aspirations' component={Vision} />
// <Route path='goal-detail' component={GoalDetail} />
// <Route path='Goals' component={Goals} />
// <Route path='Portfolio' component={Portfolio} />
// <Route path='Transfers' component={Transfers} />
// <Route path='Performance' component={Performance} />
