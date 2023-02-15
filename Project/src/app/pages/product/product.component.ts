import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
// estoy haciendo que el boton nos lleve al hypervinuclo
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  id!:number; // nos llegará un id en algun momento pero no lo quiero inicializar 
   product!:any;
  constructor(private productsService:ProductsService,private activatedRoute:ActivatedRoute, private router:Router) {}
  ngOnInit() :void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id = Number(params.get("id"));
    } )
 // hypervinculo 
    this.productsService.getProduct(this.id).subscribe((data:any)=>{
      //console.log(data);
      this.product = data
    })
  }
  
  }
  