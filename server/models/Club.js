const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;

let clubSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 3 },
    imageUrl: { type: String, required: true },
    city: { type: String, required: true, enum: [ 'Sofia', 'Plovdiv', 'Varna', 'Burgas' ] },
    rank: { type: String, required: true, enum: [ 'Top', 'Medium', 'Low' ] },
    courts: { type: Number, required: true, min: 1 },
    hasLighting: { type: Boolean, default: false },
    hasIndoorCourts: { type: Boolean, default: false },
    tournaments: [ { type: objectId, ref: 'Tournament' } ]
});

let Club = mongoose.model('Club', clubSchema);

module.exports = Club;
