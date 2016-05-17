import { combineReducers } from 'redux';
import user from 'reducers/user';
import topic from 'reducers/topic';
import message from 'reducers/message';
import userInformation from 'reducers/reducer-user-information';
import { routerReducer as routing } from 'react-router-redux';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user,
  topic,
  message,
  routing,
  userInformation
});

export default rootReducer;
