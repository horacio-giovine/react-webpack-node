//import User from '../models/user';

export default (id, done) => {
  console.log('desirializeUser id: ', id);
  done(null, id);
  // User.findById(id, (err, user) => {
  //   done(err, user);
  // });
};
