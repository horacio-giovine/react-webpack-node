console.log('ENTRA A SERVER/INDEX')
import express from 'express';
import webpack from 'webpack';
import { ENV } from './config/appConfig';
import { connect } from './db';
import passportConfig from './config/passport';
import expressConfig from './config/express';
import routesConfig from './config/routes';
console.log('ANTES DE WEBPACK')
import webpackDevConfig from '../webpack/webpack.config.dev-client';
console.log('DESPUES DE WEBPACK')
console.log('ANTES DE SERVER')
const App = require('../public/assets/server');
console.log('DESPUES DE SERVER')

const app = express();

console.log('IMPORTA TODO')
/*
 * Database-specific setup
 * - connect to MongoDB using mongoose
 * - register mongoose Schema
 */
connect();

console.log('CONNECTA')
/*
 * REMOVE if you do not need passport configuration
 */
passportConfig();
console.log('passportConfig')

console.log(ENV)
if (ENV === 'development') {
  const compiler = webpack(webpackDevConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

/*
 * Bootstrap application settings
 */
expressConfig(app);
console.log('expressConfig')
/*
 * REMOVE if you do not need any routes
 *
 * Note: Some of these routes have passport and database model dependencies
 */
routesConfig(app);
console.log('routesConfig')
/*
 * This is where the magic happens. We take the locals data we have already
 * fetched and seed our stores with data.
 * App is a function that requires store data and url
 * to initialize and return the React-rendered html string
 */
app.get('*', App.default);
console.log('get')

app.listen(app.get('port'));
console.log('listen')
