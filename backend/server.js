import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

//routes
import userRoutes from './routes/UserRoute.js';
import dmtRoute from './routes/DMTRoute.js';
import officerRoute from './routes/OfficerRoute.js';

const app = express();
const PORT = 5000;

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error.message);
});

// Use userRoutes
app.use('/', userRoutes);
app.use('/', officerRoute);
app.use('/', dmtRoute);

app.get('/', (req, res) => {
  res.send('MERN Stack Backend');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
