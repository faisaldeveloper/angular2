import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
//import { ProductService } from './product/product.service';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ArticleComponent } from './article/article.component';
//import { CharacterComponent } from './characters/character.component';
import { CharactersComponent } from './characters/characters.component';
//import { ChildComponent } from './characters/child.component';

@NgModule({
  declarations: [
   // AppComponent,
    ProductComponent,
    HomeComponent,
    UserComponent,
    ArticleComponent,
   // CharacterComponent,
    CharactersComponent
    //ChildComponent
  ],
  imports: [
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent       
      },
      {
        path: 'dashboard',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductComponent
      },
      {
        path: 'user/:id',
        component: UserComponent
      },
      {
        path: 'articles',
        component: ArticleComponent
      },
      {
        path: 'characters',
        component: CharactersComponent
      }
    ])
  ],
  exports: [ RouterModule ], 
})
export class AppRoutingModule {}
