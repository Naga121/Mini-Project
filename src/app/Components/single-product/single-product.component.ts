import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  productData:any="";
 
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    
    this.product.getProduct().subscribe(
      (data)=>this.productData=data
    )  
  }

}
