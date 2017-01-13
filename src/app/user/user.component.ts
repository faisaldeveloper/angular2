import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

export interface User {
    first: string; // required with minimum 5 chracters
    last: string;
    address?: {
        street?: string; // required
        postcode?: string;
    }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	public myForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes    
    public users: User[]=[];
    error; 
    msg;

    constructor(private _fb: FormBuilder) { } // form builder simplify form initialization


  ngOnInit() {

  	// the long way
    this.myForm = new FormGroup({
        first: new FormControl('', [<any>Validators.required, <any>Validators.minLength(3)]),
        last: new FormControl('', [<any>Validators.required, <any>Validators.minLength(3)]),
        address: new FormGroup({
            street: new FormControl('', <any>Validators.required),
            postcode: new FormControl('8000')
        })
    });    
    
  }

  save(model: User, isValid: boolean) {
        this.submitted = false; // set form submit to true       

        // check if model is valid
        // if valid, call API to save customer
        if(isValid){
        	const user = {
        		first:model.first,
        		last:model.last,
        		address:{
        			street:model.address.street,
        			postcode:model.address.postcode
        		} 		
        		//model.first, model.last, model.address.street, model.address.postcode
        	};
        	this.users.push(user);
        	//console.log(model, isValid, this.users);
        	return false;
        }else{this.error = 'All fields must be filled to add a user';}
        //console.log(model, isValid, this.users);
    }
    ///////////////
    deleteUser(x){
    	this.users.splice(x,1);
    	this.msg = 'User deleted successfully';
    }

}
