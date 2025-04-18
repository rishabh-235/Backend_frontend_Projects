const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://rishabh:password01@127.0.0.1:27017/mydb?authSource=admin");
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

module.exports = connectDB;
// This code is a configuration file for connecting to a MongoDB database using Mongoose.