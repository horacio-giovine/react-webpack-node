export default (token, refreshToken, profile, done) => {
  console.log('token: ', token);
  console.log('refreshToken: ', refreshToken);
  console.log('profile: ', profile);
  return done(null, profile);
};
