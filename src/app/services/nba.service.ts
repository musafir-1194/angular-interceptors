import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, filter } from 'rxjs';
import { Player, PlayerMetaData, Team, TeamMetaData } from '../models/players';

@Injectable({
  providedIn: 'root',
})
export class NbaService {
  private _playersEndPoint = `https://www.balldontlie.io/api/v1/players`;
  private _teamsEndPoint = `https://www.balldontlie.io/api/v1/teams`;

  constructor(private _httpClient: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this._httpClient.get<PlayerMetaData>(this._playersEndPoint).pipe(
      filter((response) => !!response),
      map((response: PlayerMetaData) => response.data)
    );
  }

  getTeams(): Observable<Team[]> {
    return this._httpClient.get<TeamMetaData>(this._teamsEndPoint).pipe(
      filter((response) => !!response),
      map((response: TeamMetaData) => response.data)
    );
  }
}
