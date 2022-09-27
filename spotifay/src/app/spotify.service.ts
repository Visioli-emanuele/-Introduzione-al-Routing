import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB9psVFj3tq3_0RqILuabZZ77iNcO8gqrcGz7sTE9l51wRockKAMW2Bb_2VCNVPfDjSkZErliGFs2Y6795K1k0pCnB2Q57AXjrT70FG6U_JkwsMAj66u3uDe-ERGsc3eI9-VUp-BycT_XmhczFUslaN-Pfz9vfiuj0h-Bhx3l8a8luZtNxgpLl4e_ebTc2LYJk'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}