'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//import User from '../models/user';

exports.default = function (id, done) {
  console.log('desirializeUser id: ', id);
  done(null, id);
  // User.findById(id, (err, user) => {
  //   done(err, user);
  // });
};