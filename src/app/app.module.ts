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
import { ActivatedRoute } from '@angular/router';

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
    AppRoutingModule
  ],
  providers: [AuthorsService, BooksService, ActivatedRoute],
  bootstrap: [AppComponent]
})
export class AppModule { }
