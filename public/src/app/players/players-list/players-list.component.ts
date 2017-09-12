import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../player.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

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

  deletePlayer(player_id) {
  	this._playerService.serviceDeletePlayer(player_id)
  		.then( (success) => this.getPlayers())
  		.catch( (err) => console.log(err))
  }

}
