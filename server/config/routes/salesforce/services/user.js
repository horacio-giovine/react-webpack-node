import { isAuthenticated } from '../../../passport'

export default (app, controllers) => {
  app.get('/users', isAuthenticated, function(req, res, next) {
    controllers.users.getUsers(req, res, next);
  });


}
