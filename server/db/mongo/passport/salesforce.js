import controllers from '../controllers';

export default (token, refreshToken, profile, done) => {
  //console.log('token: ', token);
  //console.log('refreshToken: ', refreshToken);
  //console.log('profile: ', profile);

  return controllers.users.salesforceSignUp(token, refreshToken, profile, done);

  //return done(null, profile);
};
