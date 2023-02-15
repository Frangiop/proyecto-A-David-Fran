import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
productList : any [] = [];

constructor (private productService:ProductsService) {}  

ngOnInit(): void {   
  this.productService.getProducts().subscribe((data:any)=>{  
 
   console.log(data)
 
   this.productList=[...data]  
 
  })  
  }

}
