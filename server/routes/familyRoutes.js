const express = require('express');
const router = express.Router();

// Mock Family Data
const familyMembers = [
  { id: 1, name: 'John Doe', age: 40, relation: 'Father' },
  { id: 2, name: 'Jane Doe', age: 38, relation: 'Mother' },
  { id: 3, name: 'Jack Doe', age: 18, relation: 'Son' },
  { id: 4, name: 'Jill Doe', age: 16, relation: 'Daughter' },
];

// Get All Family Members
router.get('/', (req, res) => {
  res.json(familyMembers);
});

// Add a Family Member
router.post('/', (req, res) => {
  const { name, age, relation } = req.body;
  if (!name || !age || !relation) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const newMember = { id: familyMembers.length + 1, name, age, relation };
  familyMembers.push(newMember);
  res.status(201).json(newMember);
});

module.exports = router;
