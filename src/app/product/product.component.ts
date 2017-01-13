import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { Article } from '../article/article.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  title = 'Products';
  products: Product[];
  product: Product; 
  listFilter: string = 't';
  error; 
  msg; 

  constructor(private _p:ProductService) { 
  	console.log(`into product component`);
  	this.products = _p.getProducts();    
  }

  ngOnInit() {
  }
  ////////////
  addProduct(name, desc, price){
  	if(name!="" && desc !="" && price >0){
  		this.product = {"name":name, "desc":desc, "image":'headphone.jpeg', "price":price};
  		this.products.push(this.product);
  		this.error='';
  	}else{
  		this.error = 'All fields must be filled to add a product';
  	}
  	
  }
  //////////
  deleteProduct(x){
  	this.products.splice(x,1);
    this.msg = 'Product deleted successfully.';
  }

}
