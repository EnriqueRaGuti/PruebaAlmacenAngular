import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataService } from 'src/app/Servicios/data.service';
import { Producto } from 'src/app/Servicios/prodcuto';

@Component({
  selector: 'app-ingresarnuevo',
  templateUrl: './ingresarnuevo.component.html',
  styleUrls: ['./ingresarnuevo.component.css']
})
export class IngresarnuevoComponent implements OnInit {

  producto = new Producto()

  constructor(private http: HttpClient, private dataService: dataService, public router: Router) { }

  ngOnInit(): void {
  }

  crear(){
      this.dataService.createDeposito(this.producto)
      this.router.navigate(['/panel'])
  }

  volver() {
    this.router.navigate(['/panel'])
  }

}
