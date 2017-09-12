let mongoose = require('mongoose');

let PlayerSchema = new mongoose.Schema({
  name: {type: String, required: [true, "player name required"]},
  position: {type: String},
  game1: {type: String, 'default':'undecided'},
  game2: {type: String, 'default':'undecided'},
  game3: {type: String, 'default':'undecided'},
}, {timestampes: true});

let Player = mongoose.model('Player', PlayerSchema);