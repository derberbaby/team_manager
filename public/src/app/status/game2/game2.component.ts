import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../player.service';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {

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
  	this._playerService.servicePlay(player_id, 'game2')
  	.then( (player) => this.getPlayers())
  	.catch( (err) => console.log(err))
  }

  out(player_id) {
  	this._playerService.serviceOut(player_id, 'game2')
  	.then( (player) => this.getPlayers())
  	.catch( (err) => console.log(err))
  }

  dunno(player_id) {
  	this._playerService.serviceDunno(player_id, 'game2')
  	.then( (player) => this.getPlayers())
  	.catch( (err) => console.log(err))
  }

}
