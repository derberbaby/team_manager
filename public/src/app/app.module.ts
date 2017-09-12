import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlayerService } from './player.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './status/status.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { PlayersCreateComponent } from './players/players-create/players-create.component';
import { Game1Component } from './status/game1/game1.component';
import { Game2Component } from './status/game2/game2.component';
import { Game3Component } from './status/game3/game3.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    StatusComponent,
    PlayersListComponent,
    PlayersCreateComponent,
    Game1Component,
    Game2Component,
    Game3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
