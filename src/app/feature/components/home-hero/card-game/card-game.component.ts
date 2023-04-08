import { Component, OnInit } from '@angular/core';
import { Tableau } from 'src/app/models/tableau.model';
import { TableauInteractionService } from 'src/app/services/tableau-interaction.service';
import { Router } from '@angular/router';

interface ImagePosition{
  x: number;
  y: number;
}

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent implements OnInit{

  randomColors?: string[];
  tableaux: Tableau[] = [];
  imagePositions: ImagePosition[] = [];
  isLoading = true;
  
  constructor(private tableauInteractionService: TableauInteractionService, private _router: Router){ }

  ngOnInit(): void {
    this.tableauInteractionService.getTableaux().then(tableaux => {
      this.tableaux = tableaux.sort(() => Math.random() - 0.5).slice(0, 15);
      this.generateImagePositions();
      this.randomColors = this.generateRandomColors(this.tableaux.length, '$random-colors');
      this.isLoading = false;
    })
  }

  goPaint(id: string) {
    this._router.navigate(['/galery', id]);
  }

  generateImagePositions() {
    // Boucler sur les images
    for (let i = 0; i < this.tableaux.length; i++) {
      // Générer des coordonnées aléatoires pour chaque image
      let max_x = parent.innerWidth - 200;
      let max_y = parent.innerHeight - 300;

      let x = Math.max(0, Math.floor(Math.random() * max_x));
      let y = Math.max(0, Math.floor(Math.random() * max_y));
  
      // Vérifier si les nouvelles coordonnées se chevauchent avec les images existantes
      for (let j = 0; j < this.imagePositions.length; j++) {
        let existingImage = this.imagePositions[j];
        if (x > existingImage.x - 200 && x < existingImage.x + 200 &&
            y > existingImage.y - 250 && y < existingImage.y + 250) {
          // Les coordonnées se chevauchent, générer de nouvelles coordonnées
          x = Math.max(0, Math.floor(Math.random() * max_x));
          y = Math.max(0, Math.floor(Math.random() * max_y));
          // Redémarrer la boucle pour vérifier les nouvelles coordonnées
          j = -1;
        }
      }
  
      // Ajouter un nouvel objet au tableau avec les coordonnées de l'image
      this.imagePositions.push({ x: x, y: y });
    }
  }
  generateRandomColors(length: number, colors: string): string[] {
    return (colors + ' ').repeat(Math.ceil(length / 5)).split(' ').slice(0, length);
  }
  
}
