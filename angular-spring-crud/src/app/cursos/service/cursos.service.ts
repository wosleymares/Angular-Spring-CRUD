import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient: HttpClient) {}

    listAll(): Curso[] {
      return[
      {_id: '01', nome: 'Angular', categoria: 'Front-End'}
      ];
    }
  }
