require("dotenv").config(); // Charger les variables d'environnement du fichier .env
const mongoose = require("mongoose");
const Person = require("./models/person"); // Importer le modèle Person

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

// Créer et sauvegarder une personne
const createPerson = async () => {
  const person = new Person({
    name: "John Doe",
    age: 30,
    favoriteFoods: ["Pizza", "Burgers"],
  });

  try {
    const savedPerson = await person.save();
    console.log("Person saved:", savedPerson);
  } catch (err) {
    console.log("Error saving person:", err);
  }
};

// Créer plusieurs personnes
const createMultiplePeople = async () => {
  const people = [
    { name: "drogba", age: 45, favoriteFoods: ["Pasta", "Ice Cream"] },
    { name: "ronaldo", age: 40, favoriteFoods: ["Sushi", "Steak"] },
    { name: "messi", age: 37, favoriteFoods: ["Tacos", "Burritos"] },
  ];

  try {
    const savedPeople = await Person.create(people);
    console.log("Multiple people saved:", savedPeople);
  } catch (err) {
    console.log("Error creating multiple people:", err);
  }
};

// Rechercher des personnes par nom
const findPeopleByName = async (name) => {
  try {
    const people = await Person.find({ name: name });
    console.log("People found by name:", people);
  } catch (err) {
    console.log("Error finding people by name:", err);
  }
};

// Rechercher une personne par aliment préféré
const findPersonByFood = async (food) => {
  try {
    const person = await Person.findOne({ favoriteFoods: food });
    console.log("Person found by food:", person);
  } catch (err) {
    console.log("Error finding person by food:", err);
  }
};

// Rechercher une personne par ID
const findPersonById = async (id) => {
  try {
    const person = await Person.findById(id);
    console.log("Person found by ID:", person);
  } catch (err) {
    console.log("Error finding person by ID:", err);
  }
};

// Mettre à jour une personne
const updatePerson = async (id) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      id,
      { age: 57 },
      { new: true }
    );
    console.log("Person updated:", updatedPerson);
  } catch (err) {
    console.log("Error updating person:", err);
  }
};

// Supprimer une personne
const deletePerson = async (id) => {
  try {
    const deletedPerson = await Person.findByIdAndRemove(id);
    console.log("Person deleted:", deletedPerson);
  } catch (err) {
    console.log("Error deleting person:", err);
  }
};

// Lancer les fonctions (par exemple, créer une personne)
createPerson();
// Vous pouvez également appeler d'autres fonctions comme `createMultiplePeople()`, `findPeopleByName()`, etc.
