const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;

let tournamentSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 3 },
    imageUrl: { type: String, required: true },
    balls: { type: String, required: true, enum: [ 'Dunlop', 'Wilson', 'Head' ] },
    fee: { type: Number, required: true, min: 0 },
    club: { type: objectId, ref: 'Club' },
    playersRegistered: [ { type: objectId, ref: 'User' } ]
});

let Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;
