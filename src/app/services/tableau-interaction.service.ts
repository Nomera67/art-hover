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
    const ids = [436818, 436678, 437769, 437392, 438814, 435713, 437879, 437549, 437317, 436492, 438815, 437869, 436141, 634108, 438002, 435621, 436616, 435976, 435770, 437078, 436658, 435680, 438954, 436795, 437323, 436005, 436001, 437878, 438009, 436455, 435813];

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