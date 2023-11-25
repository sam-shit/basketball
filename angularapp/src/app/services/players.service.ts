import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpclient : HttpClient) { }

  private apiURL = 'https://8080-addabcfedcbbad307818034dccbfcadeone.premiumproject.examly.io/api'

  getPlayers() : Observable<any[]> {
    return this.httpclient.get<any[]>(this.apiURL + '/players')
  }

  httpOptions = {headers : new HttpHeaders({'content-type' : 'application/json'})}

  createPlayer(player : any) : Observable<any> {
    return this.httpclient.post<any>(this.apiURL + '/Players', player, this.httpOptions)
  }

  getPlayer(id : number) : Observable<any> {
    return this.httpclient.get<any>(this.apiURL + '/Players/' + id)
  }

}
