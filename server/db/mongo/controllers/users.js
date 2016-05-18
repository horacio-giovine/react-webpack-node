import User from '../models/user';
import passport from 'passport';

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

export default {
  login,
  logout,
  signUp,
  salesforceVerifyCallback
};



/*

{
  _raw: {
    id: 'https://test.salesforce.com/id/00DJ0000003LTKTMA4/00536000000erTFAAY',
    asserted_user: true,
    user_id: '00536000000erTFAAY',
    organization_id: '00DJ0000003LTKTMA4',
    username: 'tmichels@brightplan.com.bpsbox1',
    nick_name: 'tmichels',
    display_name: 'Thys Michels',
    email: 'tmichels@brightplan.com',
    email_verified: true,
    first_name: 'Thys',
    last_name: 'Michels',
    timezone: 'America/Los_Angeles',
    photos: {
      picture: 'https://c.cs10.content.force.com/profilephoto/005/F',
      thumbnail: 'https://c.cs10.content.force.com/profilephoto/005/T'
    },
    addr_street: null,
    addr_city: null,
    addr_state: null,
    addr_country: null,
    addr_zip: null,
    mobile_phone: '+1 4084213711',
    mobile_phone_verified: true,
    status: {
     created_date: null, body: null
    },
    urls: {
      enterprise: 'https://cs10.salesforce.com/services/Soap/c/{version}/00DJ0000003LTKT',
      metadata: 'https://cs10.salesforce.com/services/Soap/m/{version}/00DJ0000003LTKT',
      partner: 'https://cs10.salesforce.com/services/Soap/u/{version}/00DJ0000003LTKT',
      rest: 'https://cs10.salesforce.com/services/data/v{version}/',
      sobjects: 'https://cs10.salesforce.com/services/data/v{version}/sobjects/',
      search: 'https://cs10.salesforce.com/services/data/v{version}/search/',
      query: 'https://cs10.salesforce.com/services/data/v{version}/query/',
      recent: 'https://cs10.salesforce.com/services/data/v{version}/recent/',
      profile: 'https://cs10.salesforce.com/00536000000erTFAAY',
      feeds: 'https://cs10.salesforce.com/services/data/v{version}/chatter/feeds',
      groups: 'https://cs10.salesforce.com/services/data/v{version}/chatter/groups',
      users: 'https://cs10.salesforce.com/services/data/v{version}/chatter/users',
      feed_items: 'https://cs10.salesforce.com/services/data/v{version}/chatter/feed-items'
    },
    active: true,
    user_type: 'STANDARD',
    language: 'en_US',
    locale: 'en_US',
    utcOffset: -28800000,
    last_modified_date: '2016-03-15T20:48:47.000+0000',
    is_app_installed: true,
    _photo: null
  },

  provider: 'forcedotcom',
  id: '00DJ0000003LTKTMA4/00536000000erTFAAY',
  displayName: 'Thys Michels',
  name: {
    familyName: 'Michels', givenName: 'Thys'
  },
  emails: [
    {
     value: 'tmichels@brightplan.com'
    }
  ]
}
*/