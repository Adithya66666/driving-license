import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ModelSchema = new Schema({
  name: String,
  email: String,
  password:String, 
  username:String, 
  officerNumber:String, 
  status:Boolean, 
  nic:Number,
  district:String, 
  officerType:String, 
  branch:String
});

const Model = mongoose.model('Officer', ModelSchema);

export default Model;