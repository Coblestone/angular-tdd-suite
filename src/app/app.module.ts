import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './authors/components/author.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/components/book.component';
import { AuthorsService } from './authors/authors.service';
import { BooksService } from './books/books.service';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxJsonapiModule } from 'ngx-jsonapi';

export const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: 'authors/:id', component: AuthorComponent },
  { path: 'books', component: BooksComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorComponent,
    BooksComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxJsonapiModule.forRoot({
      url: '//jsonapiplayground.reyesoft.com/v2/'
  })
  ],
  providers: [AuthorsService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
