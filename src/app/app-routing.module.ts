import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import {AuthorsComponent} from './authors/authors.component'
import {AuthorComponent} from './authors/components/author.component'
import {AuthorsService} from './authors/authors.service'

import { NgxJsonapiModule } from 'ngx-jsonapi';
import { BookComponent } from './books/components/book.component';
import { BooksComponent } from './books/books.component';
import { BooksService } from './books/books.service';


const routes: Routes = [
  {
    path: '',
    component: AuthorsComponent
  },
  {
    path: 'authors/:id',
    component: AuthorComponent
  },
  {
    path: 'books/',
    component: BooksComponent
  },
  {
    path: 'books/:id',
    component: BookComponent
  }
];

@NgModule({
  providers: [AuthorsService, BooksService, ActivatedRoute],
  imports: [RouterModule.forRoot(routes),
    NgxJsonapiModule.forRoot({
    url: '//jsonapiplayground.reyesoft.com/v2/'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
