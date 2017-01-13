import {Injectable} from '@angular/core';
import {Product} from './product.model';

@Injectable()
export class ProductService{
	getProducts(): Product[]{
		return [
		{"name":'NICEHAT GE', "desc":'A Nice Black Hat', "image":'headphone.jpeg', "price":25},
		{"name":'NICEHAT DE', "desc":'A Nice Black Hat', "image":'headphone.jpeg', "price":35},
		{"name":'HEADPHONE', "desc":'A Nice Black Hat', "image":'headphone.jpeg', "price":45},
		{"name":'LAPTOP', "desc":'A Nice Black Hat', "image":'headphone.jpeg', "price":55},
		{"name":'LED TV', "desc":'A Nice Black Hat', "image":'headphone.jpeg', "price":65},
		{"name":'MOBILE PHONE', "desc":'A Nice Black Hat', "image":'headphone.jpeg', "price":75},
		{"name":'CAR', "desc":'A Nice Black Hat', "image":'headphone.jpeg', "price":85}
		];
	}
}