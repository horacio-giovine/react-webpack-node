import { isAuthenticated } from '../../../passport'

export default (app, controllers) => {
  app.get('/api/portfolios', isAuthenticated, function(req, res, next) {
    controllers.portfolio.getPorfolios(req, res, next);
  });
}
