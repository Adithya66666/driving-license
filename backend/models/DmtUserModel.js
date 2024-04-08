import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ModelSchema = new Schema({
  name: String,
  email: String,
  password:String, 
  username:String,
  status:Boolean
});

const Model = mongoose.model('DMTUser', ModelSchema);

export default Model;