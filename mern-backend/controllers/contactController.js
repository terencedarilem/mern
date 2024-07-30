const Contact = require('../models/Contact');

// Récupérer tous les contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Créer un nouveau contact
exports.createContact = async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });
  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Récupérer un contact par ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact == null) {
      return res.status(404).json({ message: 'Contact non trouvé' });
    }
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mettre à jour un contact par ID
exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact == null) {
      return res.status(404).json({ message: 'Contact non trouvé' });
    }

    if (req.body.name != null) {
      contact.name = req.body.name;
    }
    if (req.body.email != null) {
      contact.email = req.body.email;
    }
    if (req.body.phone != null) {
      contact.phone = req.body.phone;
    }

    const updatedContact = await contact.save();
    res.json(updatedContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Supprimer un contact par ID
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact == null) {
      return res.status(404).json({ message: 'Contact non trouvé' });
    }

    await contact.remove();
    res.json({ message: 'Contact supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
