//Learning APIs
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  //Variável criada para armazenar o endereço da API
  url = 'http://localhost:3000/noticias';

  //Insere a dependência que aqui é o httpClient, que é quem se comunica com a API
  constructor(private httpClient: HttpClient) {}

  //Variável que armazena as configurações dos headers da requisição
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  //Método Get que traz as notícias da API
  getNoticias(): Observable<Noticia[]> {
    return this.httpClient.get<Noticia[]>(this.url);
  }
}
