import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';

import router from './routes/routes.js';

dotenv.config();

const app = express();

// Make visible request traffic
app.use(morgan('dev'));

// Body parsing for POST forms
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('static'));

// EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.log('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
}

await connectDB();

// Routes
// TODO A1 - Redirect '/' to '/people' to avoid default requests

// Basic error handler (so students see something helpful)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Server error. Check terminal for details.');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
