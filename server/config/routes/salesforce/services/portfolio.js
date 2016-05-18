import { isAuthenticated } from '../../../passport'

export default (app, controllers) => {
  app.route('/portfolio')
    .get(isAuthenticated, function(req, res) {
      controllers.portfolio.getPorfolios(req, res);
      //res.end();
    });
    // .post(function(req, res) {
    //   res.send('Add a book');
    // });
    // .put(function(req, res) {
    //   res.send('Update the book');
    // });
}
