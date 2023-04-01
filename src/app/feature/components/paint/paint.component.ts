import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableauInteractionService } from 'src/app/services/tableau-interaction.service';
import { Tableau } from 'src/app/models/tableau.model';


@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})

export class PaintComponent implements OnInit {
  isLoading = true;
  tableau: Tableau = {
    id: 0,
    title: '',
    artist: '',
    date: '',
    imageUrl: '',
    artistNationality: '',
    moreAbout: '',
  };
  
  constructor(private tableauInteraction: TableauInteractionService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.tableauInteraction.getTableauById(id).then((tableau: Tableau) => this.tableau = tableau as Tableau);
    this.isLoading = false;
    console.log(this.tableau.moreAbout);
  }
}
