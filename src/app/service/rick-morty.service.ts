import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  // Exportando API do Rick & Morty
  private url = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  /* Personagens */
  ObterPersonagem(page: number): Observable<any> {
    return this.http.get(`${this.url}/character?page=${page}`);
  }

  ObterPersonagemId(id: number): Observable<any> {
    return this.http.get(`${this.url}/character/${id}`);
  }

  procurarPersonagem(query: string, page: number): Observable<any> {
    return this.http.get(`${this.url}/character/?name=${query}&page=${page}`);
  }

  //#############################################################################
  
  /* Localização */
  ObterLocalizacao(page: number): Observable<any> {
    return this.http.get(`${this.url}/location?page=${page}`);
  }

  ObterLocalizacaoId(id: number): Observable<any> {
    return this.http.get(`${this.url}/location/${id}`);
  }

  procurarLocalizacao(query: string, page: number): Observable<any> {
    return this.http.get(`${this.url}/location/?name=${query}&page=${page}`);
  }

  //#############################################################################
  
  /* Episodios */
  ObterEpisodio(page: number): Observable<any> {
    return this.http.get(`${this.url}/episode?page=${page}`);
  }

  ObterEpisodioId(id: number): Observable<any> {
    return this.http.get(`${this.url}/episode/${id}`);
  }

  procurarEpisodio(query: string, page: number): Observable<any> {
    return this.http.get(`${this.url}/episode/?name=${query}&page=${page}`);
  }

}
