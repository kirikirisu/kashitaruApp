import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const userInformationSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const User = mongoose.model('User', userInformationSchema);

export default User;
