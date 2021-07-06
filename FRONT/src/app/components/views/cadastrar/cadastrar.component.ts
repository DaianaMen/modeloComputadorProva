import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Computador } from 'src/app/models/Computador';
import { ComputadorService } from 'src/app/services/computador.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  dono!: string;
  placamae!: string;
  processador!: string;
  memoria!: string;
  armazenamento!: string;
  fonte!: string;

  constructor(private service: ComputadorService, private router: Router, private snack: MatSnackBar) {}

  ngOnInit(): void {
  }

  cadastrar(): void {
    const computador = new Computador();
    computador.dono = this.dono;
    computador.placamae = this.placamae;
    computador.processador = this.processador;
    computador.memoria = Number.parseInt(this.memoria);
    computador.armazenamento = this.armazenamento;
    computador.fonte = this.fonte;
    this.service.cadastrar(computador).subscribe(() => {
      this.snack.open("Computador cadastrado", "Computador", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }
}
