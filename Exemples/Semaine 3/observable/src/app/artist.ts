export class Artist {
  name?: string;
  bio?: string;

  static parseArtist(JSON:any): Artist {
    let artist: Artist = new Artist();
    artist.name = JSON.artist.name;
    artist.bio = JSON.artist.bio.summary;
    return artist;
  }
}
