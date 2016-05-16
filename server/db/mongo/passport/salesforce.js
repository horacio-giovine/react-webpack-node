import controllers from '../controllers';

export default (token, refreshToken, profile, done) => {
  console.log('token: ', token);
  console.log('refreshToken: ', refreshToken);
  console.log('profile: ', profile);
  console.log('controllers: ', controllers);

  return done(null, profile);
};
