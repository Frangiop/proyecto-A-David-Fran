import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  db_url:string = " http://localhost:3000/productos "  

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.db_url)
  }
// esta es la funcion del boton con el hyèrvinculo
  getProduct(id:number){
    return this.http.get(`${this.db_url}/${id}`)
  }
}
