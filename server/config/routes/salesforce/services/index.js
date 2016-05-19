import auth from './auth';
import portfolio from './portfolio'
import user from './user'

export default (app, controllers) => {
  console.log('services index');
  auth(app, controllers);
  portfolio(app, controllers);
  user(app, controllers);
};
