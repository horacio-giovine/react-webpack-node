import controllers from '../controllers';

export default (token, refreshToken, profile, done) => {
  return controllers.users.salesforceVerifyCallback(token, refreshToken, profile, done);
};
