import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ModelSchema = new Schema({
  name: String,
  email: String,
  licenseNumber:String, 
  username:String,
  password:String, 
  status:Boolean,
  driverStatus:Boolean,
  address:String, 
  nic:Number, 
  dob:String, 
  doi:String, 
  doe:String, 
  image:String, 
  categories:String
});

const Model = mongoose.model('Driver', ModelSchema);

export default Model;