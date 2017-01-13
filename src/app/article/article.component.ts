import { Component, OnInit, Input } from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

 articles: Article[];

  @Input() artikle: Article;
  myarticle;

  constructor() { 
  	this.articles = [
  	new Article('Halfstack', 'http://halfstack.io', 2),
  	];
   	console.log('into article component...');
  }

  ngOnInit() {
  }

}
