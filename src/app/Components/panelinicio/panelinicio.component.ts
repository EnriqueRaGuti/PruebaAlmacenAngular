import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataService } from 'src/app/Servicios/data.service';
import { Producto } from 'src/app/Servicios/prodcuto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panelinicio',
  templateUrl: './panelinicio.component.html',
  styleUrls: ['./panelinicio.component.scss']
})
export class PanelinicioComponent implements OnInit {
    itemsMenu:any
    product:any;
    checked: boolean = false;
    productos: Producto[];
    selected:any;
    datos:any

    display: boolean = false;

    selectedValues: string[] = [];

    name:string
    stock:number
    price:number

    constructor(private http: HttpClient, private dataService: dataService, public router: Router) { }

    ngOnInit(): void {
        this.cargarMenu();
        this.getProductos();
    }

    getProductos(): void {
		this.dataService
			.getProductos().subscribe( data => {
        console.log(data,"data");
        this.product = data
      })      
	}

    irIngresar() {
        this.router.navigate(['/ingresar'])
    }

    seleccionado(datos:any) {
        console.log(datos);
        this.datos = datos
    }


    cargarMenu(): void {
        this.itemsMenu = [
            {
                label: 'Modificar Stock',
                icon: 'pi pi-pencil',
            },
            {
                label: 'Activar',
                icon: 'pi pi-caret-right',
            },
            {
                label: 'Pausar',
                icon: 'pi pi-ban',
                disabled: 'false'
            },
            {
                label: 'Eliminar',
                icon: 'pi pi-trash',
                command: (event:any) => {
            
                }
            }
        ];
    }

    editar(p:any) {
        this.display = true;
        console.log(p);
        this.name = p.name
        this.stock = p.stock
        this.price = p.price
    }

}
