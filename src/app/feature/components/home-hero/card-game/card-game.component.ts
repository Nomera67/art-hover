import { Component, OnInit } from '@angular/core';
import { Tableau } from 'src/app/models/tableau.model';
import { TableauInteractionService } from 'src/app/services/tableau-interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent implements OnInit{
  tableaux: Tableau[] = [];
  
  constructor(private tableauInteractionService: TableauInteractionService, private _router: Router){ }

  ngOnInit(): void {
    this.tableauInteractionService.getTableaux().then(tableaux => {
      this.tableaux = tableaux.sort(() => Math.random() - 0.5).slice(0, 15);
    })
  }

  goPaint(id: string) {
    this._router.navigate(['/galery', id]);
  }
}
