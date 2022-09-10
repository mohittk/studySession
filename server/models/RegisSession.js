const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistrationForSession = new Schema({
    user_id: String,
    session_id: String
})

module.exports = mongoose.model('Registration for session', RegistrationForSession);
