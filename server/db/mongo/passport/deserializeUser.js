import User from '../models/user';

export default (id, done) => {
  //only the user ID is serialized to the session, keeping the amount of data stored within
  //the session small. When subsequent requests are received, this ID is used to find
  //the user, which will be restored to req.user.

  console.log('desirializeUser id: ', id);
  User.findOne({ 'profile.Id': id }, (findErr, existingUser) => {
    if (existingUser) {
      console.log('user FOUND');
      done(null, existingUser);
    }else{
      console.log('the user was NOT found');
      done(findErr, null);
    }
  });
};
