const Person = require("../models/person.model");
module.exports.index = (req, res) => {
  res.json({ message: "Hello World" });
};

module.exports.createPerson = (request, response) => {
  const { firstName, lastName } = request.body;
  Person.create({
    firstName,
    lastName,
  })
    .then((person) => response.json(person))
    .catch((err) => response.json(err));
};
module.exports.getAllPeople = (req, res) => {
  Person.find({})
    .then((allPeople) => res.json(allPeople))
    .catch((err) => res.json(err));
};
module.exports.getPersonById = (req, res) => {
  Person.findOne({ _id: req.params.id })
    .then((person) => res.json(person))
    .catch((err) => res.json(err));
};
module.exports.updateById = (req, res) => {
  Person.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedPerson) => res.json(updatedPerson))
    .catch((err) => res.json(err));
};
module.exports.deletePerson = (request, response) => {
  Person.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
