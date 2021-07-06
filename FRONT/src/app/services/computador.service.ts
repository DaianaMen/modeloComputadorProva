import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Computador } from '../models/Computador'

@Injectable({
    providedIn: 'root'
})
export class ComputadorService {

    private baseURL = "http://localhost:1234/";

    constructor(private http: HttpClient) { }

    listar(): Observable<Computador[]>{
        return this.http.get<Computador[]>(`${this.baseURL}computador/listar`);
    }

    cadastrar(computador: Computador): Observable<Computador>{
        return this.http.post<Computador>(`${this.baseURL}computador/cadastrar`, computador);
    }

    delete(computador_id: any): Observable<any> {
        return this.http.delete(`${this.baseURL}computador/remover/${computador_id}`);
      }

}