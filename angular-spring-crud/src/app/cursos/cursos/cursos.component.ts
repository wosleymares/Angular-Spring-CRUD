import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso';
import { CursosService } from '../service/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit{

  cursos: Curso[] = [];

  displayedColumns = ['nome', 'categoria'];

  //cursosService: CursosService;

  constructor(private cursosService: CursosService){
   // this.cursosService = new CursosService();
    this.cursos = this.cursosService.listAll();

  }

  ngOnInit(): void {

  }

}
