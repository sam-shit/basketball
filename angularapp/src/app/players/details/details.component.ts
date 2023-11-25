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
  player : any

  getPlayer() : any[] {
    this.ms.getPlayers().subscribe(data => {this.playerData.push(...data)})
    return this.playerData
  }

  ngOnInit(): void {
    this.getPlayer()
  }

}
