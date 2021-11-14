import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Producto } from './prodcuto';

@Injectable()
export class dataService {

	constructor(private http: HttpClient) {}
	
	private headers = new HttpHeaders({'Content-Type': 'application/json'});

		getProductos() {
			return this.http.get<any>('http://localhost:8000/producto')
		}

		deleteArticulo(id:number) {
			console.log(id);
			return this.http.delete<any>('http://localhost:8000/producto/2');
		}

		createDeposito(d: Producto){
			return this.http.post("http://localhost:8000/producto", JSON.stringify(d), {headers: this.headers})
			.toPromise()
			.then(res => res as Producto)
		}


}
