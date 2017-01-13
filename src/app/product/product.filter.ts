import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Pipe({
	name: 'ProductFilter'
})
export class ProductFilterPipe implements PipeTransform{

	transform(value: Product[], args: string[]): Product[] {	
		 
		 let filter: string = args[0]? args[0].toLocaleLowerCase():null;
		 console.log(args+'--'+filter);

		 //function (product: Product) { product.name.toLocaleLowerCase()==this.args	}
		
		 return filter? value.filter(
		 	(product: Product) => product.name.toLocaleLowerCase().indexOf(filter) !=-1
		 	//function (product: Product) { product.name.toLocaleLowerCase()==this.args	}
		 	): value;		
	}

}