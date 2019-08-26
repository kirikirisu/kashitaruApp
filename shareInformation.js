import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const shareInformationSchema = new mongoose.Schema({
  productName: String,
  companyName: String,
  Name: String,
  mailAddress: String,
  companyAddress: String,
  comment: String,
});

const Share = mongoose.model('Share', shareInformationSchema);

export default Share;
