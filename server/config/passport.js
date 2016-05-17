/* Initializing passport.js */
import passport from 'passport';
import local from './passport/local';
import google from './passport/google';
import salesforce from './passport/salesforce';
import { passport as dbPassport } from '../db';
import unsupportedMessage from '../db/unsupportedMessage';

export default () => {

  //In a typical web application, the credentials used to authenticate a user will only be
  //transmitted during the login request. If authentication succeeds, a session will be
  //established and maintained via a cookie set in the user's browser.
  //Each subsequent request will not contain credentials, but rather the unique cookie
  //that identifies the session. In order to support login sessions, Passport will
  //serialize and deserialize user instances to and from the session.

  if (dbPassport && dbPassport.deserializeUser) {
    passport.serializeUser((user, done) => {
      //Only save the SF user id to the session cookie
      console.log('serializeUser: ', user);
      done(null, user.profile.Id);
    });

    passport.deserializeUser(dbPassport.deserializeUser);
  } else {
    console.warn(unsupportedMessage('(de)serialize User'));
  }

  // use the following strategies
  local(passport);
  google(passport);
  salesforce(passport);
};
