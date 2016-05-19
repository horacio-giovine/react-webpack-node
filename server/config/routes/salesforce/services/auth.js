import passport from 'passport';
import { isAuthenticated } from '../../../passport'

export default (app, controllers) => {
  app.get('/auth/forcedotcom', passport.authenticate('forcedotcom', {
    display: 'page', // valid values are: "page", "popup", "touch", "mobile"
    prompt: '', // valid values are: "login", "consent", or "login consent"
    login_hint: ''
  }));

  // this should match the callbackURL parameter above:
  app.get('/auth/forcedotcom/callback',
    passport.authenticate('forcedotcom', { failureRedirect: '/error' }),
      //controllers.users.salesforceSignUp
      (req, res) => {
      res.redirect('/');
    }
  );

  app.get('https://brightplan-oktana-horacio.herokuapp.com/api/getNewToken', isAuthenticated, function(req, res, next) {
    controllers.users.getNewToken(req, res, next);
  });

  app.post('/logout',
    (req, res) => {
      req.logout();
      res.redirect('/login');
    }
  );
}
