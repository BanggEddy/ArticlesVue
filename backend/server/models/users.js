const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  role: { 
    type: String, 
    default: 'ROLE_USER' 
  },
});

const User = mongoose.model('users', userSchema);

module.exports = User;
