import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Player, Team } from 'src/models/players';
import { LoaderService } from 'src/services/loader.service';
import { NbaService } from 'src/services/nba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // player$: Observable<Player[]>;
  // team$: Observable<Team[]>;

  players: Player[] = [];
  teams: Team[] = [];

  loading$: Subject<boolean>;

  constructor(
    private _nbaService: NbaService,
    private _loaderService: LoaderService
  ) {
    // this.player$ = this._nbaService.getPlayers();
    // this.team$ = this._nbaService.getTeams();
    this.loading$ = this._loaderService.isLoading$;
  }

  loadPLayers(): void {
    this.emptyData();
    this._nbaService.getPlayers().subscribe({
      next: (player: Player[]) => (this.players = player),
      error: (err) => console.log(err),
    });
  }

  loadTeams(): void {
    this.emptyData();
    this._nbaService.getTeams().subscribe({
      next: (team: Team[]) => (this.teams = team),
      error: (err) => console.log(err),
    });
  }

  emptyData(): void {
    this.players = [];
    this.teams = [];
  }
}
