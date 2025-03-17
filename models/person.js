const mongoose = require("mongoose");

// Définir le schéma de la personne
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: { type: [String], required: true },
});

// Créer un modèle basé sur le schéma
const Person = mongoose.model("Person", personSchema);

module.exports = Person;
