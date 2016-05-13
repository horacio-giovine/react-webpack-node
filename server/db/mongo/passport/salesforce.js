
export default (token, refreshToken, profile, done) => {
  console.log('profile: ', profile);
  return done(null, profile);
};
