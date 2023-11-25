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
  player : {id : number, name : string, shirtno : number, position : {id : number, name : string}, appearances : number, goals : number} = {
    id: 1,
    name: 'Test Player',
    shirtno: 10,
    position: { id: 1, name: 'Forward' },
    appearances: 20,
    goals: 10,
  }

  id : number

  // getPlayers(id : number) {
 
  // }

  ngOnInit(): void {
    this.ms.getPlayer(this.id).subscribe((data : any) => {
      this.playerData = data
    })
  }

}
