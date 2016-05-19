import User from '../models/user';
import passport from 'passport';
import axios from 'axios'

/**
 * POST /login
 */
export function login(req, res, next) {
  // Do email and password validation for the server
  passport.authenticate('local', (authErr, user, info) => {
    if (authErr) return next(authErr);
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    // Passport exposes a login() function on req (also aliased as
    // logIn()) that can be used to establish a login session
    return req.logIn(user, (loginErr) => {
      if (loginErr) return res.status(401).json({ message: loginErr });
      return res.status(200).json({
        message: 'You have been successfully logged in.'
      });
    });
  })(req, res, next);
}

/**
 * POST /logout
 */
export function logout(req, res) {
  // Do email and password validation for the server
  req.logout();
  res.redirect('/');
}

/**
 * POST /signup
 * Create a new local account
 */
export function signUp(req, res, next) {
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  User.findOne({ email: req.body.email }, (findErr, existingUser) => {
    if (existingUser) {
      return res.status(409).json({ message: 'Account with this email address already exists!' });
    }

    return user.save((saveErr) => {
      if (saveErr) return next(saveErr);
      return req.logIn(user, (loginErr) => {
        if (loginErr) return res.status(401).json({ message: loginErr });
        return res.status(200).json({
          message: 'You have been successfully logged in.'
        });
      });
    });
  });
}

export function salesforceVerifyCallback(token, refreshToken, profile, done) {
  //When Passport authenticates a request, it parses the credentials contained in the request.
  //It then invokes the verify callback with those credentials as arguments, in this case
  //username and password. If the credentials are valid, the verify callback invokes done to
  //supply Passport with the user that authenticated.
  //After this, the serializeUser method will run with the user object, and it will decide what to save to the session


  console.log('profile: ', profile);

  const user = new User({
    accessToken: token,
    refreshToken: refreshToken,
    instanceUrl: profile._raw.urls.profile.split('/')[2].split('.')[0],//'https://cs10.salesforce.com/005J0000005owb3IAA'.split('/')[2].split('.')[0] -->  cs10
    profile: {
      Id: profile._raw.user_id,
      Username: profile._raw.username,
      LastName: profile._raw.last_name,
      FirstName: profile._raw.first_name,
      Email: profile._raw.email,
      Alias: profile._raw.nick_name,
      CommunityNickname: profile._raw.display_name,
      IsActive: profile._raw.active,
      LocaleSidKey: profile._raw.locale,
      LanguageLocaleKey: profile._raw.language
    }
  });

  User.findOne({ 'profile.Id': profile._raw.user_id }, (findErr, existingUser) => {
    console.log('find user with profile id = ' + profile._raw.user_id);
    if (existingUser) {
      console.log('the user exists');
      return done(null, existingUser);
    }else{
      console.log('the user does NOT exist');
      user.save((saveErr) => {
        console.log('we tried to save the user');
        if (saveErr){
          console.log('save ERROR');
          return done(saveErr, null);
        }else{
          console.log('save SUCCESS');
          return done(null, user);
        }
      });
    }
  });
}

export function getUsers(req, res, next) {
  console.log('req.user: ', req.user);
  axios(
    {
      method: 'get',
      url: 'https://cs10.salesforce.com/services/apexrest/v1/user',
      headers: {
        'Authorization': 'Bearer ' + req.user.accessToken
      }
    }
  )
  .then(function (response) {
    console.log('users: ', response);
    res.json(response);
  })
  .catch(function (response) {
    console.log('ERROR: ', response);
  });
}


export default {
  login,
  logout,
  signUp,
  salesforceVerifyCallback,
  getUsers
};
