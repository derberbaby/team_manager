import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../player.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players-create',
  templateUrl: './players-create.component.html',
  styleUrls: ['./players-create.component.css']
})
export class PlayersCreateComponent implements OnInit {

	player = {
		name: '',
		position: ''
	}

	players: Array<any>;
	errors: Array<any>;

  constructor(private _playerService: PlayerService, private _router: Router) { }

  ngOnInit() {
  }

  createPlayer() {
  	this._playerService.serviceCreatePlayer(this.player)
  		.then( (success) => {
  			this.player = {
  				name: '',
  				position: ''
  			}
  			this._router.navigate(['/players', 'list'])
  		})
  		.catch( (err) => {
  			this.errors = JSON.parse(err._body);
  		})
  }
}
