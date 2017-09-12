import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../player.service';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component implements OnInit {

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
  	this._playerService.servicePlay(player_id, 'game3')
  	.then( (player) => this.getPlayers())
  	.catch( (err) => console.log(err))
  }

  out(player_id) {
  	this._playerService.serviceOut(player_id, 'game3')
  	.then( (player) => this.getPlayers())
  	.catch( (err) => console.log(err))
  }

  dunno(player_id) {
  	this._playerService.serviceDunno(player_id, 'game3')
  	.then( (player) => this.getPlayers())
  	.catch( (err) => console.log(err))
  }

}
