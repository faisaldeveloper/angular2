import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import { SubComponent } from './home-child.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

 chtitle:string = "Homes";
 eventMsg:any='';
 public form: FormGroup;

/*
  private data: Observable<Array<number>>;
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;*/
 
  constructor(public fb: FormBuilder) { 
      this.form = this.fb.group({
        name:'',
        email:''
      });
  }

  ngOnInit() {
  }

  init() {
      /*this.data = new Observable(observer => {
          setTimeout(() => {
              observer.next(42);
          }, 1000);

          setTimeout(() => {
              observer.next(43);
          }, 2000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
      });

       let subscription = this.data.subscribe(
          value => this.values.push(value),
          error => this.anyErrors = true,
          () => this.finished = true
      );*/
    }
    ///////////////
    //handle event raised from child component template
  onNotify(message:string):void {
    this.eventMsg = message;
  }

}
