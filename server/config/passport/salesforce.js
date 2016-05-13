import {Strategy as ForceDotComStrategy} from 'passport-forcedotcom';
import { salesforce } from '../secrets';
import unsupportedMessage from '../../db/unsupportedMessage';
import { passport as dbPassport } from '../../db';

export default (passport) => {
  if (!dbPassport || !dbPassport.salesforce || ! typeof dbPassport.salesforce === 'function') {
    console.warn(unsupportedMessage('passport-forcedotcom'));
    return;
  }

  passport.use(new ForceDotComStrategy({
    clientID: salesforce.clientId,
    clientSecret: salesforce.clientSecret,
    scope: ['full', 'refresh_token'],
    callbackURL: salesforce.redirectUri,
    authorizationURL: salesforce.authorizationURL,
    tokenURL: salesforce.tokenURL
  }, dbPassport.salesforce));
};
