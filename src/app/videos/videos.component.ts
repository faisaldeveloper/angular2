import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router }   from '@angular/router';


@Component({
  selector: 'app-videos',
  template: `<h2>Basic Request</h2>
  <button type="button" (click)='onBack()'>go to Products</button>
 <button type="button" (click)="makeRequest()">Make Request</button>
 <div *ngIf="loading">loading...</div>
 <pre>{{data | json}}</pre>`,
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

	data: Object;
	loading: boolean;
	http: Http;

  constructor(http: Http, private _router: Router) { this.http = http; }

  ngOnInit() {
  }

 makeRequest(): void {
 	this.loading = true;
 	this.http.request('http://jsonplaceholder.typicode.com/posts/1')
 	.subscribe((res: Response) => {
 		this.data = res.json();
 		this.loading = false;
	});
 }
 ////////////////
 onBack(): void{
 	this._router.navigate(['products'])
 }

}
