import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tableau } from '../models/tableau.model';

@Injectable({
  providedIn: 'root'
})

export class TableauInteractionService {

  private apiUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

  constructor(private http: HttpClient) { }

  getTableauById(id: number): Promise<Tableau> {
    return this.getTableaux().then(tableaux => {
      const tableau = tableaux.find(t => t.id === id);
      if (tableau) {
        return Promise.resolve(tableau);
      } else {
        return Promise.reject(`Tableau with id ${id} not found`);
      }
    });
  }
  

  getTableaux(): Promise<Tableau[]> {
    const ids = [
      436818,
      436678,
      437769,
      437392,
      438814,
      435713,
      437879,
      437549,
      437317,
      436492,
      438815,
      437869,
      436141,
      634108, 
      438002,
      438011,
      438012,
      438013,
      438014,
      438023,
      438024,
      438025,
      438026,
      438027,
      438028,
      438029,
      438030,
      438031,
      438032,
      438033,
      438098,
      438099,
      438100,
      438101,
      438102,
      438103,
      438105,
      438106,
      438107,
      438110,
      438112,
      438113,
      438115,
      438116,
      438117,
      438118,
      438120,
      438123,
      438126,
      438127,
      438128,
      438129,
      438130,
      438132,
      438134,
      438136,
      438139,
      438144, ];

    const promises = ids.map(id => {
      const url = `${this.apiUrl}${id}`;
      return this.http.get(url).toPromise();
    });

    return Promise.all(promises).then(responses => {
      return responses.map((response: any) => {
        const tableau: Tableau = {
          id: response.objectID,
          title: response.title,
          artist: response.artistDisplayName,
          date: response.objectDate,
          imageUrl: response.primaryImageSmall,
          artistNationality: response.artistNationality,
          moreAbout: response.objectURL,
        };
        return tableau;
      });
    });
  }
}