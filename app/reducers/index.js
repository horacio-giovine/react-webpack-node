import { combineReducers } from 'redux';
import user from 'reducers/user';
import topic from 'reducers/topic';
import message from 'reducers/message';
import userInformation from 'reducers/reducer-user-information';
import activities from 'reducers/reducer-activities';
import aspirations from 'reducers/reducer-aspiration-detail';
import goalDetail from 'reducers/reducer-goal-detail'
import goals from 'reducers/reducer-goals'
import { routerReducer as routing } from 'react-router-redux';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user,
  topic,
  message,
  routing,
  userInformation,
  activities,
  aspirations,
  goalDetail,
  goals
});

export default rootReducer;
