import auth from './auth';
import portfolio from './portfolio'

export default (app, controllers) => {
  console.log('services index');
  auth(app, controllers);
  portfolio(app, controllers);
};
