import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 'app-track'
import { environment } from 'src/environments/environment';
//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
  getArtist(arg0: string): import("rxjs").Observable<Object> {
    throw new Error('Method not implemented.');
  }
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({Authorization: environment.oauthToken});

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB14oApYHzzvjcjCnDUMp4hH69d5EdKErOTJngCJWNEd-n8iEGX4S7iA--q4OaSk7ChMQndzlAZlvUj6Am-LluCFySxs_cN_mwUjlR58fLfFZeHY5jvJqB-GsNz0o_uEVUdnNi7ADEoKx7INk9ZK4Ew1MTZseruArFeFOOy88UW0J-fYJ_oXNLAD4RGydFKkmM'
    });
    
    return this.http.get(url, { headers });
  }

}