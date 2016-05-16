import services from './services/index';

export default (app, controllers) => {
  console.log('salesforce index');
  services(app, controllers);
};
