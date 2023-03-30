export class Tableau {
    id: string;
    title: string;
    date: string;
    artist: string;
    artistNationality: string;
    imageUrl: string;
    wikidata_url?: string;
  
    constructor(id: string, title: string, creation_date: string, artist: string, nationality: string, image_url: string, wikidata_url?: string) {
      this.id = id;
      this.title = title;
      this.date = creation_date;
      this.artist = artist;
      this.artistNationality = nationality;
      this.imageUrl = image_url;
      this.wikidata_url = wikidata_url;
    }
  }