const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @route   POST /api/users/signup
// @desc    Register a new user
// @access  Public
router.post('/signup', async (req, res) => {
  try {

    const { firstName, lastName, userName, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const user = new User({fullName: `${firstName} ${lastName}`, userName, email, password, role });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: error.message || 'Server Error' });
  }
});



// @route   POST /api/users/signin
// @desc    Sign in a user
// @access  Public
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200).json({ token, user: { id: user._id, name: user.userName, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;