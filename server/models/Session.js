const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Session = new Schema({
    title: String,
    subject: String,
    startDate: String,
    endDate: String,
    maxStudentAllowed: Number,
    alreadyRegistered: Number
})

module.exports = mongoose.model('Session', Session);