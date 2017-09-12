import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './status/status.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { PlayersCreateComponent } from './players/players-create/players-create.component';
import { Game1Component } from './status/game1/game1.component';
import { Game2Component } from './status/game2/game2.component';
import { Game3Component } from './status/game3/game3.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/players/list' },
  { path: 'players', component: PlayersComponent, children:[
  	{ path: 'list', component: PlayersListComponent },
  	{ path: 'addplayer', component: PlayersCreateComponent }
  ]},
  { path: 'status/game', component: StatusComponent, children:[
  	{ path: '1', component: Game1Component },
  	{ path: '2', component: Game2Component },
  	{ path: '3', component: Game3Component }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
