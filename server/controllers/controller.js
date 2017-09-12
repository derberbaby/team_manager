// require mongoose
let mongoose = require('mongoose');
// import models
let Player = mongoose.model('Player');
// exporting and importing this logic into routes
module.exports = {

  index: (req, res) => {
    Player.find({}, (err, data) => {
      if(err) {
      	// create an array
        let errors = [];
        // loop through the array 
        for(let i in err.errors){
          // for each error's message, push to array
          errors.push(err.errors[i].message);
          // now the array is error messages
        }
        // this sends an error code along with all of the errors associated with the request
        // from backend to the front end
        return res.status(400).send(errors);
      }
      else{
        return res.json(data);
      }
    })
  },

  create: (req, res) => {
  	console.log(req.body);
    let player = new Player(req.body);
    player.save( (err, player) => {
    	if(err) {
        	let errors = [];
        	for(let i in err.errors){
        	  errors.push(err.errors[i].message);
        	}
        return res.status(400).send(errors);
    	}
    	else {
    		return res.json(true);
    	}
    })
  },

  delete: (req, res) => {
  	console.log('controller', req.params.player_id);
  	Player.remove({_id: req.params.player_id}, (err) => {
  		if(err) {
  			let errors = [];
        	for(let i in err.errors){
        	  errors.push(err.errors[i].message);
        	}
        return res.status(400).send(errors);
  		}
  		else {
  			return res.json(true);
  		}
  	})
  },

  play: (req, res) => {
  	Player.findOne({_id: req.params.player_id}, (err, player) => {
  		if(err) {
			let errors = [];
        	for(let i in err.errors){
        	  errors.push(err.errors[i].message);
        	}
        return res.status(400).send(errors);
  		}
  		else {
	  		if(req.params.game_no == 'game1') {
	  			player.game1 = 'playing'
	  		}
	  		if(req.params.game_no == 'game2') {
	  			player.game2 = 'playing'
	  		}
	  		if(req.params.game_no == 'game3') {
	  			player.game3 = 'playing'
	  		}
	  		player.save( (err) => {
	  			if(err) {
					let errors = [];
        			for(let i in err.errors){
        			  errors.push(err.errors[i].message);
        			}
        		return res.status(400).send(errors);
  				}
  				else {
  					return res.json(true);
	  			}
  			})
	  	}
  	})
  },

    out: (req, res) => {
  	Player.findOne({_id: req.params.player_id}, (err, player) => {
  		if(err) {
			let errors = [];
        	for(let i in err.errors){
        	  errors.push(err.errors[i].message);
        	}
        return res.status(400).send(errors);
  		}
  		else {
	  		if(req.params.game_no == 'game1') {
	  			player.game1 = 'notplaying'
	  		}
	  		if(req.params.game_no == 'game2') {
	  			player.game2 = 'notplaying'
	  		}
	  		if(req.params.game_no == 'game3') {
	  			player.game3 = 'notplaying'
	  		}
	  		player.save( (err) => {
	  			if(err) {
					let errors = [];
        			for(let i in err.errors){
        			  errors.push(err.errors[i].message);
        			}
        		return res.status(400).send(errors);
  				}
  				else {
  					return res.json(true);
	  			}
  			})
	  	}
  	})
  },

    dunno: (req, res) => {
  	Player.findOne({_id: req.params.player_id}, (err, player) => {
  		if(err) {
			let errors = [];
        	for(let i in err.errors){
        	  errors.push(err.errors[i].message);
        	}
        return res.status(400).send(errors);
  		}
  		else {
	  		if(req.params.game_no == 'game1') {
	  			player.game1 = 'undecided'
	  		}
	  		if(req.params.game_no == 'game2') {
	  			player.game2 = 'undecided'
	  		}
	  		if(req.params.game_no == 'game3') {
	  			player.game3 = 'undecided'
	  		}
	  		player.save( (err) => {
	  			if(err) {
					let errors = [];
        			for(let i in err.errors){
        			  errors.push(err.errors[i].message);
        			}
        		return res.status(400).send(errors);
  				}
  				else {
  					return res.json(true);
	  			}
  			})
	  	}
  	})
  }

}