import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../player.service';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {

	players: Array<any>;

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
  	this.getPlayers();
  }

  getPlayers() {
  	this._playerService.serviceGetPlayers()
	.then( (players) => this.players = players)
	.catch( (err) => console.log(err))
  }

  play(player_id) {
  	this._playerService.servicePlay(player_id, 'game1')
  	.then( (player) => this.getPlayers())
  	.catch( (err) => console.log(err))
  }

  out(player_id) {
  	this._playerService.serviceOut(player_id, 'game1')
  	.then( (player) => this.getPlayers())
  	.catch( (err) => console.log(err))
  }

  dunno(player_id) {
  	this._playerService.serviceDunno(player_id, 'game1')
  	.then( (player) => this.getPlayers())
  	.catch( (err) => console.log(err))
  }

}
