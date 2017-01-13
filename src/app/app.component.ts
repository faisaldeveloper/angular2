import { Component, Input } from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title:string = 'Home';

  constructor() { 
	  	console.log(`into main app component`);		  	  			
  }

}