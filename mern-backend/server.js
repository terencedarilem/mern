require('dotenv').config(); // Assurez-vous que cette ligne est en haut du fichier
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoutes');

// Middleware et routes
app.use(express.json());
app.use('/contacts', contactRoutes);

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion MongoDB:', err));

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
