import passport from 'passport';
//import { controllers, passport as passportConfig } from '../db';

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

  app.post('/logout',
    (req, res) => {
      req.logout();
      res.redirect('/login');
    }
  );
}
