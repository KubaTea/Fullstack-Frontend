import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from './anime';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private baseUrl = "http://localhost:8080/api/v1/anime";

  constructor(private httpClient: HttpClient) { }

  getAnimeList(): Observable<HttpResponse<Anime[]>>{
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    return this.httpClient.get<Anime[]>(this.baseUrl, { headers, observe: 'response', responseType: 'json' });
  }

  createAnime(anime: Anime): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, anime);
  }

  getAnimeById(id: number | undefined): Observable<Anime>{
    return this.httpClient.get<Anime>(`${this.baseUrl}/${id}`);
  }

  updateAnime(id: number | undefined, anime: Anime): Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, anime);
  }

  deleteAnime(id: number | undefined): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
