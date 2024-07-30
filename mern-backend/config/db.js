const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connecté');
  } catch (err) {
    console.error('Erreur de connexion MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
