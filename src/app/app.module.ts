import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ArticleComponent } from './article/article.component';
import { CharacterComponent } from './characters/character.component';
import { CharactersComponent } from './characters/characters.component';
import { ChildComponent } from './characters/child.component';
import { ProductFilterPipe } from './product/product.filter';
import { VideosComponent } from './videos/videos.component';
import { SubComponent } from './home/home-child.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    UserComponent,
    ArticleComponent,
    CharacterComponent,
    CharactersComponent,
    ChildComponent,
    ProductFilterPipe,
    VideosComponent,
    SubComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
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
        path: 'user',
        component: UserComponent
      },
      {
        path: 'articles',
        component: ArticleComponent
      },
      {
        path: 'characters',
        component: CharactersComponent
      },
      {
        path: 'videos',
        component: VideosComponent
      },
      {
        path: 'movies',
        component: MoviesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
