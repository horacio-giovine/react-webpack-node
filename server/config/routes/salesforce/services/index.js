import auth from './auth';

export default (app, controllers) => {
  console.log('services index');
  auth(app, controllers);
};
