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
        'Bearer BQBgX98Hj_D22DHIipe_0nJX5fv_9kekVtp4eLLnt5IYPC5pLSTrupW9S-IcqEEVz3Q4yFndne-8nLFj64q46_zb-q6Kq91i2z5KeuiMhyRw2WGzLSqSf82Fgu8KlKAMipSHhxhFF4qFknXa2gjt-oOa5ti6jXn4_futFL-B9A-ngmDbLKvkqMwV9Y816f98kiQ'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}