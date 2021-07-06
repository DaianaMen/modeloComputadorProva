import { Component, OnInit } from '@angular/core';
import { Computador } from 'src/app/models/Computador';
import { ComputadorService } from 'src/app/services/computador.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  computadores!: MatTableDataSource<Computador>;
  displayedColumns: string[] = ['id', 'dono', 'placamae', 'processador',
  'memoria','armazenamento','fonte', 'criadoEm'];

  constructor(private service: ComputadorService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar().subscribe((computadores) => {
    this.computadores = new MatTableDataSource<Computador>(computadores);
  });
}

excluir(computador_id : String): void {
  console.log('teste');
  this.service.delete(computador_id).subscribe(
    response => {
      console.log(response);
      this.service.listar().subscribe((computadores) => {
        this.computadores = new MatTableDataSource<Computador>(computadores);
      });
    },
    error => {
      console.log(error);
    });

}
}
