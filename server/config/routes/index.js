import salesforce from './salesforce/index';

export default (app, controllers) => {
  console.log('routes index');
  salesforce(app, controllers);
}
