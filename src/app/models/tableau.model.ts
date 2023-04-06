export class Tableau {
    id: number;
    title: string;
    date: string;
    artist: string;
    artistNationality: string;
    imageUrl: string;
    moreAbout: string;
    wikidata_url?: string;
    
  
    constructor(id: number, title: string, creation_date: string, artist: string, nationality: string, image_url: string,  moreAbout: string, wikidata_url?: string) {
      this.id = id;
      this.title = title;
      this.date = creation_date;
      this.artist = artist;
      this.artistNationality = nationality;
      this.imageUrl = image_url;
      this.moreAbout = moreAbout;
      this.wikidata_url = wikidata_url;
    }
  }