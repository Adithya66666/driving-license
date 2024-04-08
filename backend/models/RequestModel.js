import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ModelSchema = new Schema({
  name: String,
  email: String,
});

const Model = mongoose.model('Requests', ModelSchema);

export default Model;