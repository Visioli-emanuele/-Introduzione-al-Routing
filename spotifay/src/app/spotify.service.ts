import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 'app-track'
import { environment } from 'src/environments/environment';
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
    const headers = new HttpHeaders({Authorization: environment.oauthToken});

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAXVPW0BLI27nWWvh2wLMdjpLQ5vT_98Z8jaiZ6SFoZLBP7tUATndO0xRwR6YkIoodFrkog9EyJg_tYcqIatMvN5M28R-UcCcy0nXuS_evxJPH9-uLhm6HxuFpHsKLjdbJ8zYJKR05AiotnA-F-1H-CAyhRXJkkMZVaeTnuUjSYF6SeBMWCfd20G_ojX1E9zaQ'
    });
    
    return this.http.get(url, { headers });
  }
  getArtist(id: string) {
    const url = `https://api.spotify.com/v1/artists/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAXVPW0BLI27nWWvh2wLMdjpLQ5vT_98Z8jaiZ6SFoZLBP7tUATndO0xRwR6YkIoodFrkog9EyJg_tYcqIatMvN5M28R-UcCcy0nXuS_evxJPH9-uLhm6HxuFpHsKLjdbJ8zYJKR05AiotnA-F-1H-CAyhRXJkkMZVaeTnuUjSYF6SeBMWCfd20G_ojX1E9zaQ'
    });
    
    return this.http.get(url, { headers });
  }

}