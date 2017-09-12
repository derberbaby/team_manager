import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class PlayerService {

  constructor(private _http: Http) { }

  serviceCreatePlayer(player) {
  	return this._http.post('/api/players', player)
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceGetPlayers() {
  	return this._http.get('/api/players')
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceDeletePlayer(player_id) {
  	return this._http.delete('/api/players/delete/' + player_id)
  		.map( (response) => response.json())
  		.toPromise()
  }

  servicePlay(player_id, game_no) {
  	return this._http.get('/api/players/play/' + game_no + '/' + player_id)
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceOut(player_id, game_no) {
  	return this._http.get('/api/players/out/' + game_no + '/' + player_id)
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceDunno(player_id, game_no) {
  	return this._http.get('/api/players/dunno/' + game_no + '/' + player_id)
  		.map( (response) => response.json())
  		.toPromise()
  }
}
