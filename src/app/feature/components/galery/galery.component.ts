import { Component, OnInit } from '@angular/core';
import { TableauInteractionService } from 'src/app/services/tableau-interaction.service';
import { Tableau } from 'src/app/models/tableau.model';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})

export class GaleryComponent implements OnInit {

  tableaux: Tableau[] = [];
  isLoading = true;

  constructor(private tableauInteractionService: TableauInteractionService) { }

  ngOnInit(): void {
    this.tableauInteractionService.getTableaux().then(tableaux => {
      this.tableaux = tableaux;
      this.isLoading = false;
    });
  }
  
}