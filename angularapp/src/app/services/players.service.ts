import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpclient : HttpClient) { }

  private apiURL = 'https://8080-addabcfedcbbad307818034dccbfcadeone.premiumproject.examly.io/api'

  getPlayers() : Observable<any[]> {
    return this.httpclient.get<any[]>(this.apiURL + '/players')
  }

  
}
