import { Position } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private ms : PlayersService) { }

  playerData : any[] = []
  player : {id : number, name : string, shirtno : number, position : Position, appearances : number, goals : number} = {
    id: 1,
    name: 'Test Player',
    shirtno: 10,
    position: { id: 1, name: 'Forward' },
    appearances: 20,
    goals: 10,
  }

  getPlayers() : any[] {
    this.ms.getPlayers().subscribe(data => {this.playerData.push(...data)})
    return this.playerData
  }

  ngOnInit(): void {
    this.getPlayers()
  }

}
