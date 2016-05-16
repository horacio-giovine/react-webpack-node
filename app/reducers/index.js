import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import AspirationDetailReducer from 'routes/aspiration-details/reducer-aspiration-detail'
import UserReducer from 'routes/profile/reducer-user-information'
import ActivitiesReducer from 'components/profile/reducer-activities'
import GoalDetailReducer from 'routes/goal-detail/reducer-goal-detail'
import Goals from 'routes/goals/reducer-goals'

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user: UserReducer,
  aspirations: AspirationDetailReducer,
  activities: ActivitiesReducer,
  goalDetail: GoalDetailReducer,
  goals: Goals,
  router
})

export default rootReducer
